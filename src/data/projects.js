import backToFriendsImg from '../assets/img/Back to Friends Poster.webp'
import hollowSkyImg from '../assets/img/Beneath the Hollow Sky.webp'
import cartethyiaImg from '../assets/img/Cartethyia Banner.webp'
import cartethyiaGuideImg from '../assets/img/Cartethyia Build Guide.webp'
import crimsonWeaveImg from '../assets/img/Crimson Weave.webp'
import everglowingJusticeImg from '../assets/img/Everglowing Justice.webp'
import exaltairImg from '../assets/img/Exaltair Ishmael Parhelion.webp'
import inLoveImg from "../assets/img/I'm In Love With You Poster.webp"
import naoiReiImg from '../assets/img/Naoi Rei Poster.webp'
import sayThatImg from '../assets/img/say that! Poster.webp'
import spiderverseImg from '../assets/img/Spider-Man Across the Spider-Verse Poster.webp'
import onlyExceptionImg from '../assets/img/You Are My Only Exception.webp'

// `short` is the tab label on phones, where four full labels don't fit
export const categories = [
  { key: 'all', label: 'All', short: 'All' },
  { key: 'uiux', label: 'UI/UX Design', short: 'UI/UX' },
  { key: 'design', label: 'Graphic Design', short: 'Graphic' },
  { key: 'social', label: 'Social Media', short: 'Social' },
]

// Graphic design pieces. UI/UX projects live in caseStudies.js because each one has its own page.
export const designWorks = [
  {
    id: 'only-exception',
    title: 'You Are My Only Exception',
    tags: ['Poster', 'Typography'],
    image: onlyExceptionImg,
    // description: 'A moody poster built around type, inspired by the Paramore song of the same name.',
  },
  {
    id: 'hollow-sky',
    title: 'Beneath the Hollow Sky',
    tags: ['Poster', 'Illustration'],
    image: hollowSkyImg,
    // description: 'A hand-sketched, ink-style poster about leaving regret behind and walking toward what comes next.',
  },
  {
    id: 'crimson-weave',
    title: 'Crimson Weave',
    tags: ['Poster', 'Typography'],
    image: crimsonWeaveImg,
    // description: 'A gritty bilingual title treatment layered over a high-contrast character illustration.',
  },
  {
    id: 'back-to-friends',
    title: 'Back to Friends',
    tags: ['Poster', 'Lyric Edit'],
    image: backToFriendsImg,
    // description: 'A film-still layout about the quiet awkwardness of staying friends after a breakup.',
  },
  {
    id: 'spiderverse',
    title: 'Across the Spider-Verse',
    tags: ['Poster', 'Fan Art'],
    image: spiderverseImg,
    // description: 'A high-contrast fan poster that reimagines the release art for the animated film.',
  },
  {
    id: 'say-that',
    title: 'Say That!',
    tags: ['Poster', 'Collage'],
    image: sayThatImg,
    // description: 'A duotone lyric edit in manga panels, using halftone print texture to carry the heartbreak.',
  },
  {
    id: 'in-love-with-you',
    title: "I'm In Love With You",
    tags: ['Poster', 'Collage'],
    image: inLoveImg,
    // description: 'A warm, sunset-toned photo collage with layered lyric typography.',
  },
  {
    id: 'naoi-rei',
    title: 'Naoi Rei',
    tags: ['Social Media', 'Layout'],
    image: naoiReiImg,
    // description: 'An idol concept graphic that mixes a grainy photo treatment with tight layout work.',
  },
  {
    id: 'cartethyia-guide',
    title: 'Cartethyia Build Guide',
    tags: ['Infographic', 'Fan Art'],
    image: cartethyiaGuideImg,
    // description: 'A build-guide infographic that lays out echoes, stats, and team synergies for Cartethyia.',
  },
  {
    id: 'cartethyia',
    title: 'Cartethyia',
    tags: ['Banner', 'Fan Art'],
    image: cartethyiaImg,
    // Where to center the crop in the 3:4 tile (CSS object-position)
    focus: '28% center',
    // description: 'A soft character banner for Wuthering Waves, built around delicate typography.',
  },
  {
    id: 'exaltair',
    title: 'Exaltair',
    tags: ['Banner', 'Fan Art'],
    image: exaltairImg,
    // description: 'A Punishing: Gray Raven banner pairing Exaltair with the Ishmael: Parhelion frame.',
  },
  {
    id: 'everglowing-justice',
    title: 'Everglowing Justice',
    tags: ['Banner', 'Fan Art'],
    image: everglowingJusticeImg,
    // description: 'A duotone banner that plays with bold display type and halftone texture.',
  },
]
