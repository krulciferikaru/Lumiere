import backToFriendsImg from '../assets/img/Back to Friends Poster.webp'
import hollowSkyImg from '../assets/img/Beneath the Hollow Sky.webp'
import busReservationImg from '../assets/img/Campus Bus Seat Reservation System.webp'
import cartethyiaImg from '../assets/img/Cartethyia Banner.webp'
import cartethyiaGuideImg from '../assets/img/Cartethyia Build Guide.webp'
import crimsonWeaveImg from '../assets/img/Crimson Weave.webp'
import eduTrackImg from '../assets/img/EduTrack.webp'
import everglowingJusticeImg from '../assets/img/Everglowing Justice.webp'
import exaltairImg from '../assets/img/Exaltair Ishmael Parhelion.webp'
import fitnessClickerImg from '../assets/img/FitnessClicker.webp'
import inLoveImg from "../assets/img/I'm In Love With You Poster.webp"
import jinhsiBotImg from '../assets/img/Jinhsi Bot.webp'
import jlDesginsImg from '../assets/img/JLDesigns.webp'
import naoiReiImg from '../assets/img/Naoi Rei Poster.webp'
import sayThatImg from '../assets/img/say that! Poster.webp'
import spiderverseImg from '../assets/img/Spider-Man Across the Spider-Verse Poster.webp'
import swiftImg from '../assets/img/SWIFT.webp'
import onlyExceptionImg from '../assets/img/You Are My Only Exception.webp'

export const categories = [
  { key: 'all', label: 'All' },
  { key: 'uiux', label: 'UI/UX' },
  { key: 'code', label: 'Code' },
  { key: 'design', label: 'Graphic Design' },
]

export const projects = [
  {
    id: 'swift-capstone',
    title: 'SWIFT — Subscriber & Billing System',
    category: ['code', 'uiux'],
    tags: ['Laravel', 'React', 'Capstone'],
    link: 'https://github.com/krulciferikaru/SWIFT',
    image: swiftImg,
    orientation: 'landscape',
    description:
      'A full subscriber and billing management system built for a real cable TV/internet provider — staff dashboard, automated billing, SMS notifications, and exportable financial reports.',
  },
  {
    id: 'fitness-clicker',
    title: 'FitnessClicker',
    category: ['code'],
    tags: ['Django', 'Game'],
    link: 'https://github.com/krulciferikaru/FitnessClicker',
    image: fitnessClickerImg,
    orientation: 'landscape',
    description:
      'A browser-based idle/incremental clicker game — click to earn points, buy upgrades, and prestige once you have maxed everything out.',
  },
  {
    id: 'jinhsi-bot',
    title: 'Jinhsi Bot',
    category: ['code'],
    tags: ['Python', 'Discord Bot'],
    link: 'https://github.com/krulciferikaru/Jinhsi-Bot-Archived',
    image: jinhsiBotImg,
    orientation: 'landscape',
    description:
      'A Discord bot providing build guides, echo, and weapon lookups for Wuthering Waves via slash commands, organized into a clean cog-based architecture.',
  },
  {
    id: 'campus-bus-reservation',
    title: 'Campus Bus Seat Reservation System',
    category: ['code'],
    tags: ['C++', 'Console App'],
    link: 'https://github.com/krulciferikaru/Campus-Bus-Seat-Reservation-System',
    image: busReservationImg,
    orientation: 'landscape',
    description:
      'A console-based seat reservation system for university bus transport, with secure authentication restricted to students and staff.',
  },
  {
    id: 'student-management-system',
    title: 'EduTrack — Student Management System',
    category: ['code'],
    tags: ['PHP', 'MySQL'],
    link: 'https://github.com/krulciferikaru/student-management-system',
    image: eduTrackImg,
    orientation: 'landscape',
    description:
      'A role-based student management system for schools — student, course, and grade CRUD across Super-admin, Admin, and Instructor dashboards, with PDF report exports.',
  },
  {
    id: 'jldesgins-site',
    title: 'JLDesgins — Portfolio Website',
    category: ['code', 'uiux'],
    tags: ['Web Design', 'Frontend'],
    image: jlDesginsImg,
    orientation: 'landscape',
    description:
      'A dark-themed personal portfolio site built for a Web Applications Development course, featuring Home, About, Services, Works, and Contact pages.',
  },
  {
    id: 'only-exception',
    title: 'You Are My Only Exception',
    category: ['design'],
    tags: ['Poster', 'Typography'],
    image: onlyExceptionImg,
    orientation: 'portrait',
    description: 'A moody, typography-led poster design inspired by the Paramore song of the same name.',
  },
  {
    id: 'hollow-sky',
    title: 'Beneath the Hollow Sky',
    category: ['design'],
    tags: ['Poster', 'Illustration'],
    image: hollowSkyImg,
    orientation: 'portrait',
    description: 'A hand-sketched, ink-style poster about walking away from regret toward what comes next.',
  },
  {
    id: 'crimson-weave',
    title: 'Crimson Weave',
    category: ['design'],
    tags: ['Poster', 'Typography'],
    image: crimsonWeaveImg,
    orientation: 'portrait',
    description: 'A gritty, bilingual title treatment layered over a high-contrast character illustration.',
  },
  {
    id: 'back-to-friends',
    title: 'Back to Friends',
    category: ['design'],
    tags: ['Poster', 'Lyric Edit'],
    image: backToFriendsImg,
    orientation: 'portrait',
    description: 'A cinematic, film-still layout exploring the quiet awkwardness of a post-breakup friendship.',
  },
  {
    id: 'spiderverse',
    title: 'Across the Spider-Verse',
    category: ['design'],
    tags: ['Poster', 'Fan Art'],
    image: spiderverseImg,
    orientation: 'portrait',
    description: 'A bold, high-contrast fan poster reimagining the release art for the animated film.',
  },
  {
    id: 'say-that',
    title: 'Say That!',
    category: ['design'],
    tags: ['Poster', 'Collage'],
    image: sayThatImg,
    orientation: 'portrait',
    description: 'A duotone, manga-panel lyric edit exploring heartbreak through halftone print texture.',
  },
  {
    id: 'in-love-with-you',
    title: "I'm In Love With You",
    category: ['design'],
    tags: ['Poster', 'Collage'],
    image: inLoveImg,
    orientation: 'portrait',
    description: 'A warm, sunset-toned photo collage paired with layered lyric typography.',
  },
  {
    id: 'naoi-rei',
    title: 'Naoi Rei',
    category: ['design'],
    tags: ['Social Media', 'Layout'],
    image: naoiReiImg,
    orientation: 'portrait',
    description: 'A high-energy idol concept graphic combining grainy photo treatment with sharp layout work.',
  },  
  {
    id: 'cartethyia-guide',
    title: 'Cartethyia Build Guide',
    category: ['design'],
    tags: ['Infographic', 'Fan Art'],
    image: cartethyiaGuideImg,
    orientation: 'portrait',
    description: 'A companion build-guide infographic laying out echoes, stats, and synergies for Cartethyia.',
  },
  {
    id: 'cartethyia',
    title: 'Cartethyia',
    category: ['design'],
    tags: ['Banner', 'Fan Art'],
    image: cartethyiaImg,
    orientation: 'landscape',
    description: 'A soft, ethereal character banner for Wuthering Waves, built around delicate typography.',
  },

  {
    id: 'exaltair',
    title: 'Exaltair',
    category: ['design'],
    tags: ['Banner', 'Fan Art'],
    image: exaltairImg,
    orientation: 'landscape',
    description: 'A dramatic Punishing Gray Raven banner pairing Exaltair with the Ishmael: Parhelion frame.',
  },
  {
    id: 'everglowing-justice',
    title: 'Everglowing Justice',
    category: ['design'],
    tags: ['Banner', 'Fan Art'],
    image: everglowingJusticeImg,
    orientation: 'landscape',
    description: 'A high-contrast duotone banner exploring bold display type and halftone texture.',
  },
]
