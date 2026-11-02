// Time machine for archived versions of the site, loaded at the end of public/archived/<version>/index.html.
// It mirrors the live site's floating calling card, time machine panel, and slab wipe
// (src/components/CallingCard.jsx and src/components/PageTransition.jsx), so moving between versions
// feels like one continuous scene change: the page you leave covers the screen, the page you land on
// starts covered and sweeps the slabs away once it has loaded.
;(function () {
  var TRAVEL_KEY = 'lumiere-time-travel'
  var VERSIONS = [
    { label: 'Lumière V2', title: 'Lumière V2', note: 'A Persona 5-inspired design', year: '2026', href: '/' },
    { label: 'Lumière V1', title: 'Lumière V1', note: 'Original minimal black-and-white design', year: '2026', href: '/archived/v1/' },
  ]
  // Same timings as PageTransition.jsx
  var LABEL_START_MS = 360
  var LABEL_STAGGER_MS = 32
  var LETTER_MS = 420
  var LABEL_HOLD_MS = 120
  var REVEAL_MS = 870
  var MAX_WAIT_MS = 2500

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  var root = document.documentElement
  var here =
    VERSIONS.filter(function (v) {
      return v.href !== '/' && location.pathname.indexOf(v.href) === 0
    })[0] || VERSIONS[1]

  // Same cut-out lettering as src/components/RansomText.jsx, so the word on the slab matches exactly
  var TILTS = [-4, 3, -2, 5, -3, 2, -5, 1]
  function ransom(text) {
    var wrap = el('span', 'tm-ransom')
    var index = 0
    text.split(' ').forEach(function (word) {
      var w = el('span', 'tm-ransom-word')
      Array.prototype.forEach.call(word, function (ch) {
        var code = ch.charCodeAt(0)
        var letter = el('span', 'tm-ransom-letter')
        letter.dataset.v = String((index * 7 + code) % 4)
        letter.style.setProperty('--tilt', TILTS[(index * 3 + code) % TILTS.length] + 'deg')
        index += 1
        letter.style.setProperty('--i', String(index))
        letter.textContent = ch
        w.appendChild(letter)
      })
      wrap.appendChild(w)
    })
    return wrap
  }

  function el(tag, className, attrs) {
    var node = document.createElement(tag)
    if (className) node.className = className
    if (attrs) Object.keys(attrs).forEach(function (key) {
      node.setAttribute(key, attrs[key])
    })
    return node
  }

  // ---- The slab overlay ----
  var overlay = el('div', 'tm-overlay', { 'aria-hidden': 'true' })
  ;['red', 'white', 'ink'].forEach(function (tone) {
    overlay.appendChild(el('div', 'tm-slab tm-slab-' + tone))
  })
  var label = el('span', 'tm-label')
  overlay.appendChild(label)
  document.body.appendChild(overlay)

  function setLabel(text) {
    label.innerHTML = ''
    label.style.setProperty('--chars', String(Math.max.apply(null, text.split(' ').map(function (w) { return w.length }))))
    label.appendChild(ransom(text))
  }

  // Arriving from another version: the head script already marked the page; show the cover, wait for
  // this version to load, then sweep out.
  if (root.classList.contains('tm-arriving')) {
    setLabel(here.label)
    var revealed = false
    var reveal = function () {
      if (revealed) return
      revealed = true
      overlay.classList.add('is-revealing')
      setTimeout(function () {
        root.classList.remove('tm-arriving')
        overlay.classList.remove('is-revealing')
      }, REVEAL_MS)
    }
    var ready = function () {
      var fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()
      fonts.then(function () {
        setTimeout(reveal, 120)
      })
    }
    if (document.readyState === 'complete') ready()
    else window.addEventListener('load', ready)
    setTimeout(reveal, MAX_WAIT_MS)
  }

  function travel(version) {
    var go = function () {
      try {
        sessionStorage.setItem(TRAVEL_KEY, version.href === '/' ? 'now' : version.href)
      } catch (e) {
        // Blocked storage: the next page loads without the matching reveal
      }
      location.assign(version.href)
    }
    if (reduced) return go()
    setLabel(version.label)
    overlay.classList.add('is-covering')
    var letters = version.label.replace(/\s/g, '').length
    setTimeout(go, LABEL_START_MS + (letters - 1) * LABEL_STAGGER_MS + LETTER_MS + LABEL_HOLD_MS)
  }

  // ---- The floating card and its time machine panel ----
  var fab = el('div', 'tm-fab')
  var panel = el('div', 'tm-panel', {
    id: 'tm-panel',
    role: 'dialog',
    'aria-labelledby': 'tm-title',
    'data-open': 'false',
  })
  panel.inert = true

  var close = el('button', 'tm-close', { type: 'button', 'aria-label': 'Close the time machine' })
  close.innerHTML = '<span aria-hidden="true">&times;</span>'
  panel.appendChild(close)

  var tag = el('p', 'tm-tag')
  tag.innerHTML = '<span>Time machine</span>'
  panel.appendChild(tag)

  var title = el('h2', 'tm-title', { id: 'tm-title' })
  title.textContent = 'Reveal your past form!'
  panel.appendChild(title)

  var list = el('ul', 'tm-list')
  VERSIONS.forEach(function (version, index) {
    var item = el('li', 'tm-item')
    item.style.setProperty('--i', String(index))
    var isHere = version === here
    var row = el(isHere ? 'div' : 'button', 'tm-version' + (isHere ? ' tm-version-current' : ''))
    if (isHere) row.setAttribute('aria-current', 'page')
    else row.type = 'button'
    row.innerHTML =
      '<span class="tm-version-tag">' + version.label + '</span>' +
      '<span class="tm-version-text"><span class="tm-version-title">' + version.title + '</span>' +
      '<span class="tm-version-note">' + version.note + ' &middot; ' + version.year + '</span></span>' +
      (isHere ? '<span class="tm-on-air">Live</span>' : '<svg class="tm-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="square" aria-hidden="true"><path d="M6 18 18 6"/><path d="M8 6h10v10"/></svg>')
    if (!isHere) row.addEventListener('click', function () {
      setOpen(false)
      travel(version)
    })
    item.appendChild(row)
    list.appendChild(item)
  })
  panel.appendChild(list)

  var trigger = el('button', 'tm-trigger', {
    type: 'button',
    'aria-expanded': 'false',
    'aria-controls': 'tm-panel',
    'aria-label': 'Open the time machine: reveal past forms of this site',
  })
  trigger.innerHTML =
    '<span class="tm-card" aria-hidden="true"><span class="tm-card-slash"></span><span class="tm-card-star"></span><span class="tm-card-word">Lumière</span></span>'

  fab.appendChild(panel)
  fab.appendChild(trigger)
  document.body.appendChild(fab)

  var isOpen = false
  function setOpen(open, returnFocus) {
    isOpen = open
    panel.dataset.open = String(open)
    panel.inert = !open
    trigger.setAttribute('aria-expanded', String(open))
    trigger.setAttribute('aria-label', open ? 'Close the time machine' : 'Open the time machine: reveal past forms of this site')
    if (open) {
      setTimeout(function () {
        var first = panel.querySelector('button.tm-version')
        if (first) first.focus()
      }, 30)
    } else if (returnFocus) {
      trigger.focus()
    }
  }

  trigger.addEventListener('click', function () {
    setOpen(!isOpen)
  })
  close.addEventListener('click', function () {
    setOpen(false, true)
  })
  window.addEventListener('keydown', function (event) {
    if (isOpen && event.key === 'Escape') setOpen(false, true)
  })
  window.addEventListener('pointerdown', function (event) {
    if (isOpen && !panel.contains(event.target) && !trigger.contains(event.target)) setOpen(false)
  })

  // Coming back here with the browser's back button can restore this page mid-cover; clear it
  window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
      overlay.classList.remove('is-covering')
      root.classList.remove('tm-arriving')
    }
  })
})()
