import academicAwardees1stImg from '../assets/img/Social/academic-awardees-1st-sem.webp'
import academicAwardees2ndImg from '../assets/img/Social/academic-awardees-2nd-sem.webp'
import arawNgManggagawaImg from '../assets/img/Social/araw-ng-manggagawa.webp'
import bsitGraduates2025Img from '../assets/img/Social/bsit-graduates-2025.webp'
import bsitGraduates2026Img from '../assets/img/Social/bsit-graduates-2026.webp'
import empoweredWomenImg from '../assets/img/Social/empowered-women.webp'
import highlItImg from '../assets/img/Social/highl-it.webp'
import hiiiTechImg from '../assets/img/Social/hiii-tech.webp'
import inTheSpotlightImg from '../assets/img/Social/in-the-spotlight.webp'
import ircite2026Img from '../assets/img/Social/ircite-2026.webp'
import itFestAmbassadorImg from '../assets/img/Social/it-fest-2025-ambassador.webp'
import itFestPhotosImg from '../assets/img/Social/it-fest-2025-in-photos.webp'
import itMerch2025Img from '../assets/img/Social/it-merch-2025.webp'
import itMerch2026Img from '../assets/img/Social/it-merch-2026.webp'
import recruitmentImg from '../assets/img/Social/itsc-media-group-recruitment.webp'
import mrMsCongratsImg from '../assets/img/Social/mr-ms-it-congratulations.webp'
import spotlItImg from '../assets/img/Social/spotl-it.webp'

const fb = (id) => `https://www.facebook.com/share/p/${id}/`

// Facebook posts made for the CLSU IT Student Council, newest first.
// Each entry shows one standout image from the post; `links` lists every Facebook post in the series.
// `focus` sets where the square tile crops (CSS object-position); the lightbox shows the full image.
export const socialPosts = [
  {
    id: 'it-merch-2026',
    title: 'IT Merch 2026',
    tags: ['Announcement', 'Merch'],
    image: itMerch2026Img,
    // description: 'Product posts for the 2026 IT merch line, laid out like windows on a design canvas.',
    links: [fb('1A3BnnfDWv')],
  },
  {
    id: 'highl-it',
    title: 'HIGHL-IT',
    tags: ['Feature', 'Collage'],
    image: highlItImg,
    // description: 'A collage congratulating the college’s student journalists on their LIBOT 2026 newspaper wins.',
    links: [fb('14ysr4Fpd12')],
  },
  {
    id: 'hiii-tech',
    title: 'HIII Tech: BSIT Orientation',
    tags: ['Event', 'Series'],
    image: hiiiTechImg,
    // description: 'Pixel-arcade graphics for the orientation of new BSIT students: a title card and one card per speaker.',
    links: [fb('19oKsdXv9H')],
  },
  {
    id: 'spotl-it',
    title: 'SPOTL-IT',
    tags: ['Feature', 'Quote card'],
    image: spotlItImg,
    // description: 'A quote card from the class valedictorian’s graduation speech.',
    links: [fb('18WqPX2ZLo')],
  },
  {
    id: 'bsit-graduates-2026',
    title: 'BSIT Graduates: Class of 2026',
    tags: ['Congratulatory', 'Series'],
    image: bsitGraduates2026Img,
    focus: '15% center',
    // description: 'Congratulatory cards for the BSIT Class of 2026, one for each graduate.',
    links: [fb('1DCLhip5VE'), fb('1DNv1cQSwo')],
  },
  {
    id: 'academic-awardees-2nd-sem',
    title: 'Academic Awardees: 2nd Semester',
    tags: ['Congratulatory', 'Series'],
    image: academicAwardees2ndImg,
    // description: 'Academic awardee cards for the 2nd semester of AY 2025–2026, styled like a red scrapbook.',
    links: [fb('1CdzJHXzJX'), fb('1FWZ94ySbW'), fb('19ZabuzxUe'), fb('1KDzqVoJBK')],
  },
  {
    id: 'araw-ng-manggagawa',
    title: 'Araw ng Manggagawa',
    tags: ['Commemorative'],
    image: arawNgManggagawaImg,
    focus: 'center top',
    // description: 'A Labor Day tribute in a two-tone blue and yellow halftone style.',
    links: [fb('1CvoATjfvC')],
  },
  {
    id: 'empowered-women',
    title: 'Empowered Women Empower Women',
    tags: ['Feature', 'Commemorative'],
    image: empoweredWomenImg,
    // description: 'A National Women’s Month feature on the head of the Department of Information Technology.',
    links: [fb('1K11XpaRgy')],
  },
  {
    id: 'ircite-2026',
    title: 'iRCITE 2026: In Photos',
    tags: ['Event coverage', 'Photo series'],
    image: ircite2026Img,
    // description: 'Photo coverage of the iRCITE 2026 research conference, framed with a gradient border.',
    links: [fb('1E8j6JqHLG')],
  },
  {
    id: 'itsc-media-group-recruitment',
    title: 'ITSC Media Group Recruitment',
    tags: ['Recruitment'],
    image: recruitmentImg,
    // description: 'A recruitment post for the media team, with locked role cards and a QR code to apply.',
    links: [fb('1ELc72CHr2')],
  },
  {
    id: 'academic-awardees-1st-sem',
    title: 'Academic Awardees: 1st Semester',
    tags: ['Congratulatory', 'Series'],
    image: academicAwardees1stImg,
    // description: 'Academic awardee cards for the 1st semester of AY 2025–2026, built around a handheld game console.',
    links: [
      fb('1A3QkGJX43'),
      fb('19wWnG7Sbw'),
      fb('1Df5ZokEGu'),
      fb('19gHLec9Du'),
      fb('1JEjUWm2M6'),
      fb('1CC5YaW15U'),
    ],
  },
  {
    id: 'mr-ms-it-congratulations',
    title: 'Mr. and Ms. IT Fest 2025',
    tags: ['Congratulatory'],
    image: mrMsCongratsImg,
    focus: 'center top',
    // description: 'Congratulatory posters for the winners of Mr. and Ms. IT Fest 2025.',
    links: [fb('1BytWUz5bo')],
  },
  {
    id: 'it-fest-2025-in-photos',
    title: 'IT Fest 2025: In Photos',
    tags: ['Event coverage', 'Photo series'],
    image: itFestPhotosImg,
    // description: 'Photo coverage of IT Fest 2025, with a torn paper overlay on every frame.',
    links: [fb('18NcSyUBZw')],
  },
  {
    id: 'it-fest-2025-ambassador',
    title: 'IT Ambassador: Mr. and Ms. IT',
    tags: ['Event', 'Series'],
    image: itFestAmbassadorImg,
    focus: 'center top',
    // description: 'Candidate posters for Mr. and Ms. IT 2025, each with its own elemental background.',
    links: [fb('1KwthtvKQi')],
  },
  {
    id: 'in-the-spotlight',
    title: 'In the Spotlight',
    tags: ['Feature', 'Quote card'],
    image: inTheSpotlightImg,
    // description: 'A quote card from a College of Engineering valedictorian’s graduation tribute.',
    links: [fb('1DrJRwgCqX')],
  },
  {
    id: 'bsit-graduates-2025',
    title: 'BSIT Graduates: Class of 2025',
    tags: ['Congratulatory', 'Series'],
    image: bsitGraduates2025Img,
    focus: '15% center',
    // description: 'Congratulatory cards for the BSIT Class of 2025, one for each graduate.',
    links: [fb('1FCi3ekaHH')],
  },
  {
    id: 'it-merch-2025',
    title: 'IT Merch 2025',
    tags: ['Announcement', 'Merch'],
    image: itMerch2025Img,
    // description: 'Pre-order posts for the 2025 IT merchandise: shirts, caps, lanyards, umbrellas, and tumblers.',
    links: [fb('1CdCtkh3Yc')],
  },
]
