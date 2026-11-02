const tilts = [-4, 3, -2, 5, -3, 2, -5, 1]

// Deterministic, so a heading looks the same on every render
function styleFor(char, index) {
  const code = char.charCodeAt(0)
  return {
    variant: (index * 7 + code) % 4,
    tilt: tilts[(index * 3 + code) % tilts.length],
  }
}

// Persona-style cut-out lettering. Screen readers get the plain text.
function RansomText({ text, className = '' }) {
  let letterIndex = 0

  return (
    <>
      <span className="sr-only">{text}</span>
      <span className={`ransom ${className}`} aria-hidden="true">
        {text.split(' ').map((word, wordIndex) => (
          <span key={wordIndex} className="ransom-word">
            {[...word].map((char) => {
              const { variant, tilt } = styleFor(char, letterIndex)
              letterIndex += 1
              return (
                <span key={letterIndex} className="ransom-letter" data-v={variant} style={{ '--tilt': `${tilt}deg`, '--i': letterIndex }}>
                  {char}
                </span>
              )
            })}
          </span>
        ))}
      </span>
    </>
  )
}

export default RansomText
