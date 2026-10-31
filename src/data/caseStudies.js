import jbpActivityImg from '../assets/img/JinhsiBotPanel/jbp-activity.webp'
import jbpAssetsImg from '../assets/img/JinhsiBotPanel/jbp-assets.webp'
import jbpBotTesterImg from '../assets/img/JinhsiBotPanel/jbp-bot-tester.webp'
import jbpBuildsImg from '../assets/img/JinhsiBotPanel/jbp-builds.webp'
import jbpEchoesImg from '../assets/img/JinhsiBotPanel/jbp-echoes.webp'
import jbpEmojisImg from '../assets/img/JinhsiBotPanel/jbp-emojis.webp'
import jbpHealthImg from '../assets/img/JinhsiBotPanel/jbp-health.webp'
import jbpHomeImg from '../assets/img/JinhsiBotPanel/jbp-home.webp'
import jbpResonatorsImg from '../assets/img/JinhsiBotPanel/jbp-resonators.webp'
import jbpSkillsImg from '../assets/img/JinhsiBotPanel/jbp-skills.webp'
import jbpWeaponsImg from '../assets/img/JinhsiBotPanel/jbp-weapons.webp'
import swiftDashboardImg from '../assets/img/SWIFT/Admin - Dashboard.png'
import swiftPaymentsImg from '../assets/img/SWIFT/Admin - Payments _ Subscriber Selected.png'
import swiftApprovalsImg from '../assets/img/SWIFT/Admin - Pending Approvals _ Pending.png'
import swiftReportsImg from '../assets/img/SWIFT/Admin - Reports.png'
import swiftRolesImg from '../assets/img/SWIFT/Admin - Settings _ Manage Roles.png'
import swiftSubscribersImg from '../assets/img/SWIFT/Admin - Subscribers _ Total.png'
import swiftSubscriberDetailsImg from '../assets/img/SWIFT/Admin - Subscribers _ View Subscriber Modal.png'
import swiftSignUpImg from '../assets/img/SWIFT/Sign Up.png'

// DRAFT CONTENT: written from the project READMEs and the old card descriptions.
// Anything marked TODO is a guess. Check it, rewrite it in your own words, and add
// screenshots to `outputs` (an output with `image: null` shows a placeholder).
//
// The order here sets the Previous / Next links at the bottom of each case study.

export const caseStudies = [
  {
    slug: 'swift',
    kind: 'Capstone Project',
    title: 'SWIFT',
    subtitle: 'Subscriber and Billing System',
    summary:
      'A subscriber and billing system for Jubal Brothers Cable TV Corp. in Palayan. Staff manage subscribers, record payments, send SMS notices, and export reports from one dashboard.',
    cover: swiftDashboardImg,
    coverAlt: 'SWIFT admin dashboard with items needing attention, monthly collections, subscriber counts, and a revenue trend chart',
    tags: ['Capstone', 'Dashboard', 'Web App'],
    // TODO: confirm your exact role on the team
    role: ['UI/UX Designer', 'Frontend Developer'],
    tools: ['Figma', 'React', 'Tailwind CSS', 'shadcn/ui', 'Laravel'],
    links: [{ label: 'View on GitHub', href: 'https://github.com/krulciferikaru/SWIFT' }],
    overview:
      'SWIFT replaces the paper collection ledgers at the Palayan branch of a local cable TV and internet provider. It covers the full billing cycle: approving new subscribers, generating monthly bills, recording payments, reminding people when payment is due, and producing the financial reports the branch submits.',
    problem:
      'The branch tracked subscribers and payments by hand. Finding out who was unpaid meant flipping through ledgers, monthly reports were added up manually, and subscribers had no way to check their own balance without visiting or calling the office.',
    users: [
      {
        name: 'Admin',
        need: 'Sees the whole branch at a glance: collections, outstanding balances, and subscriber status. Approves new sign-ups and pulls reports.',
      },
      {
        name: 'Secretary',
        need: 'Handles the daily work at the counter: looking up subscribers, recording cash and GCash payments, and sending notices.',
      },
      {
        name: 'Subscriber',
        need: 'Checks their own bill and payment history online without going to the office.',
      },
    ],
    contribution: {
      // TODO: adjust to match what you personally did
      summary:
        'I designed the interface and built most of the React frontend. I worked out how each role moves through the system, then turned that into screens in Figma before building them.',
      designed: [
        'The staff dashboard with collection, outstanding balance, and subscriber status summaries',
        'The subscriber masterlist with search, filters, and status labels',
        'The payment recording flow for cash, GCash, and other methods',
        'Report screens with PDF, XLSX, and CSV export',
        'The subscriber self-service dashboard',
      ],
    },
    // TODO: replace with the steps you actually went through
    process: [
      {
        title: 'Understand the current workflow',
        body: 'Talked with branch staff about how they track subscribers, take payments, and prepare reports, and noted where the ledger system slowed them down.',
      },
      {
        title: 'Map roles and flows',
        body: 'Listed what Admin, Secretary, and Subscriber each need to do, then drew the flows for approval, billing, and payment before touching any screens.',
      },
      {
        title: 'Wireframe in Figma',
        body: 'Sketched low-fidelity layouts for the dashboard, masterlist, and payment screens to settle navigation and information order.',
      },
      {
        title: 'High-fidelity design',
        body: 'Built a small component set (cards, tables, status badges, forms) and applied it across every screen so the system stays consistent.',
      },
      {
        title: 'Build and refine',
        body: 'Implemented the screens in React with Tailwind CSS, connected them to the Laravel API, and adjusted the layouts after feedback from the staff.',
      },
    ],
    outputs: [
      {
        title: 'Admin dashboard',
        caption: 'What needs attention first, then this month’s collections and today’s subscriber counts.',
        image: swiftDashboardImg,
      },
      {
        title: 'Subscriber masterlist',
        caption: 'Every subscriber with plan, status, and balance. The cards on top double as filters.',
        image: swiftSubscribersImg,
      },
      {
        title: 'Subscriber details',
        caption: 'Contact, connection, billing, and service history in one view.',
        image: swiftSubscriberDetailsImg,
      },
      {
        title: 'Pending approvals',
        caption: 'New sign-ups wait here until staff approve or reject them.',
        image: swiftApprovalsImg,
      },
      {
        title: 'Recording a payment',
        caption: 'Balance, billing breakdown, and payment history next to the payment form.',
        image: swiftPaymentsImg,
      },
      {
        title: 'Collection report',
        caption: 'Collections by plan and payment method for any period, exportable to PDF or Excel.',
        image: swiftReportsImg,
      },
      {
        title: 'Manage roles',
        caption: 'Admin, Secretary, Field Collector, and Subscriber accounts, each with its own access.',
        image: swiftRolesImg,
      },
      {
        title: 'Subscriber sign-up',
        caption: 'Subscribers register online, and their application goes to staff for review.',
        image: swiftSignUpImg,
      },
    ],
  },
  {
    slug: 'jinhsi-bot-panel',
    kind: 'Personal Project',
    title: 'Jinhsi Bot Panel',
    subtitle: 'Admin Panel for a Discord Bot',
    summary:
      'A web panel for managing the Wuthering Waves game data behind Jinhsi Bot, my Discord information bot. The two are separate projects connected through an API, and the panel replaces thousands of lines of hard-coded data with forms, imports, and an undo history.',
    cover: jbpHomeImg,
    coverAlt: 'Jinhsi Bot Panel home page with Test and Live bot controls and counts of resonators, echoes, weapons, builds, and skills',
    tags: ['Dashboard', 'Web App', 'Discord Bot'],
    // TODO: confirm role, and add Figma to tools if you designed it there
    role: ['UI/UX Designer', 'Full-stack Developer'],
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'daisyUI', 'MongoDB', 'discord.js'],
    links: [{ label: 'View on GitHub', href: 'https://github.com/krulciferikaru/Jinhsi-Bot-Panel' }],
    overview:
      'Jinhsi Bot is an information bot for Wuthering Waves on Discord. Players can look up characters, builds, skills, echoes, and weapons without leaving Discord to search in a browser. I first wrote the bot in Python and later rewrote it in TypeScript. The panel is a separate project where all of the bot’s data is managed, and the bot gets that data through an API. Forms, CSV imports, and an activity log replace hand-edited data, so updating the bot no longer means touching its code. The panel can also start and stop the Test and Live bots and preview command replies.',
    problem:
      'The bot’s data used to live in the code itself, as data structures thousands of lines long. Every new character or game update meant editing those lines by hand, mistakes were easy to make and hard to undo, and the bot got harder to maintain as more information needed updating. Icons and Discord emojis also had to be uploaded and linked one by one.',
    users: [
      {
        name: 'Data maintainer',
        need: 'Adds and updates resonators, echoes, weapons, builds, and skills quickly when the game updates, without breaking what the bot already answers.',
      },
      {
        name: 'Discord players',
        need: 'Type a slash command like /build and get a clear, accurate answer with the right icons, without opening a browser.',
      },
    ],
    contribution: {
      summary:
        'This is a solo project. I designed the panel and the bot replies, and built both, from the database to the interface.',
      designed: [
        'Data pages with filters, pagination, and a preview before saving',
        'The build editor, with dropdowns narrowed to echoes that fit the chosen set',
        'A CSV import flow that runs a dry run first and can be undone in one step',
        'The activity log, where every change can be reversed',
        'An asset and emoji library for the icons the bot uses',
        'A health report that lists missing icons and data the bot can’t answer well',
        'A bot tester that previews command replies without opening Discord',
        'The Discord embeds for each slash command, using the bot’s own emojis',
      ],
    },
    // TODO: replace with the steps you actually went through
    process: [
      {
        title: 'List the pain points',
        body: 'Wrote down every task that was slow or risky with the hard-coded data: adding a character, fixing a typo, linking icons, and recovering from a bad edit.',
      },
      {
        title: 'Move the bot to TypeScript',
        body: 'Rewrote the original Python bot in TypeScript, then split the panel into its own project and connected the two through an API, so the bot stays focused on answering commands.',
      },
      {
        title: 'Plan the data and screens',
        body: 'Mapped how resonators, echoes, weapons, builds, and skills relate, then planned one consistent list and edit pattern for all five.',
      },
      {
        title: 'Design for safe editing',
        body: 'Added previews, dry runs, archive instead of delete, and undo, so a mistake never needs a manual fix in the database.',
      },
      {
        title: 'Design the bot replies',
        body: 'Laid out each embed so the most important stats come first and icons make sets and elements easy to scan.',
      },
      {
        title: 'Build and use it',
        body: 'Built the panel in Next.js with Tailwind CSS and daisyUI, then refined it while using it for real game updates.',
      },
    ],
    outputs: [
      {
        title: 'Resonators',
        caption: 'Every data page shares one layout: active and archived tabs, search, filters, and pagination.',
        image: jbpResonatorsImg,
      },
      { title: 'Echoes', caption: 'Each echo with its cost, class, and the Sonata sets it belongs to.', image: jbpEchoesImg },
      { title: 'Weapons', caption: 'Weapon type, base attack, and secondary stat at a glance.', image: jbpWeaponsImg },
      { title: 'Builds', caption: 'Recommended builds grouped by resonator, with the primary build marked.', image: jbpBuildsImg },
      { title: 'Skills', caption: 'Each resonator’s skills, grouped by type.', image: jbpSkillsImg },
      { title: 'Asset library', caption: 'Icons stored on GitHub, with which record uses each one.', image: jbpAssetsImg },
      { title: 'Emojis', caption: 'The Live and Test bots’ own emojis, kept separate.', image: jbpEmojisImg },
      { title: 'Activity log', caption: 'Every change, newest first, each with an Undo button.', image: jbpActivityImg },
      { title: 'Health report', caption: 'Missing and broken data, sorted by how much it affects players.', image: jbpHealthImg },
      { title: 'Bot tester', caption: 'Runs a command and previews the reply, plus start and stop for both bots.', image: jbpBotTesterImg },
    ],
  },
]

export function getCaseStudy(slug) {
  return caseStudies.find((study) => study.slug === slug)
}
