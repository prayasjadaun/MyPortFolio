// All portfolio content lives here. Edit this file to update the site —
// the section components only read from it.

import Profile from './assets/Profile.jpeg'
import AboutImg from './assets/about-new.jpg'
import CV from './assets/prayas.pdf'

import CodeLoom from './assets/CodeLoom.png'
import Adhicine from './assets/adhicine.png'
import Jobmage from './assets/Jobmage.png'
import Tvmaze from './assets/Tvmaze.png'
import FlickFever from './assets/Flickfever.png'
import SoleSeeker from './assets/soleseeker.jpg'
import Housypoint from './assets/housypoint.jpeg'

import Dhananjay from './assets/Dhananjay.png'
import Khush from './assets/khush.jpg'
import Akruti from './assets/testimonial3.png'
import Shiv from './assets/shiv.jpeg'
import Manish from './assets/manish.jpeg'

export const profile = {
  name: 'Prayas Jadaun',
  role: 'Full-stack Mobile App Developer',
  photo: Profile,
  aboutPhoto: AboutImg,
  resume: CV,
  email: 'prayas.dev01@gmail.com',
  whatsapp: '+91 7505645990',
  whatsappLink: 'https://wa.me/917505645990',
  headline: 'Mobile apps, built end to end.',
  intro:
    'I build scalable Android and iOS apps with Flutter, and the Python Django backends that power them — clean architecture, secure APIs and UI people enjoy using.',
  about:
    'Professional Full-Stack Mobile Application Developer with industry-level experience in building scalable, high-performance Android and iOS applications using Flutter and robust backend systems with Python Django. Skilled in clean architecture, advanced state management, secure API development, and delivering pixel-perfect, user-centric UI/UX for production-ready applications.',
}

export const socials = [
  { name: 'GitHub', icon: 'bx bxl-github', url: 'https://github.com/prayasjadaun' },
  { name: 'LinkedIn', icon: 'bx bxl-linkedin', url: 'https://www.linkedin.com/feed/' },
  {
    name: 'Instagram',
    icon: 'bx bxl-instagram',
    url: 'https://www.instagram.com/_thakurprayas/profilecard/?igsh=MTRyOXIwOW9hb2Zxcg==',
  },
]

export const highlights = [
  { value: '2+', label: 'Years industry experience' },
  { value: '3', label: 'Production apps live' },
  { value: '2', label: 'Platforms — Android & iOS' },
]

// "What I do" — styled like Calendly's product cards
export const services = [
  {
    tag: 'Mobile',
    badge: 'Advanced',
    title: 'Cross-platform apps with Flutter',
    text: 'One codebase, native-feeling Android and iOS apps with clean architecture and solid state management.',
    tone: 'blue',
  },
  {
    tag: 'Backend',
    badge: 'Core',
    title: 'APIs that stay fast and secure',
    text: 'Python Django and Node/Express services with PostgreSQL, Firebase and well-designed REST APIs.',
    tone: 'peach',
  },
  {
    tag: 'Cloud',
    badge: 'Growing',
    title: 'Shipping to production',
    text: 'AWS deployments, Git workflows and store releases — from first commit to Play Store and App Store.',
    tone: 'lilac',
  },
]

export const projects = [
  {
    id: 3,
    image: Jobmage,
    title: 'JobMage',
    subtitle: 'MERN stack web app',
    description: 'A full-stack web app built with MongoDB, Express, React and Node.',
    category: 'Advance',
    links: [{ label: 'Live demo', url: 'https://jobmage.vercel.app/' }],
  },
  {
    id: 2,
    image: Adhicine,
    title: 'Adhicine',
    subtitle: 'Health app',
    description: 'A health and medicine reminder app.',
    category: 'Intermediate',
    links: [{ label: 'GitHub', url: 'https://github.com/prayasjadaun/Adhicine_Medicine_App' }],
  },
  {
    id: 6,
    image: SoleSeeker,
    title: 'Sole Seeker',
    subtitle: 'E-commerce app',
    description: 'A shoe shopping e-commerce app.',
    category: 'Intermediate',
    links: [{ label: 'GitHub', url: 'https://github.com/prayasjadaun/SoleSeeker' }],
  },
  {
    id: 4,
    image: Tvmaze,
    title: 'TV Maze',
    subtitle: 'Movies app',
    description: 'Browse shows and movies using the TV Maze API.',
    category: 'Intermediate',
    links: [{ label: 'GitHub', url: 'https://github.com/prayasjadaun/TV_Maze_Movies_App' }],
  },
  {
    id: 5,
    image: FlickFever,
    title: 'Flick Fever',
    subtitle: 'Movies app',
    description: 'A movie discovery app.',
    category: 'Intermediate',
    links: [{ label: 'GitHub', url: 'https://github.com/prayasjadaun/Flick_Fever' }],
  },
  {
    id: 1,
    image: CodeLoom,
    title: 'Code Loom',
    subtitle: 'Library app',
    description: 'Books, courses and handwritten notes in one app.',
    category: 'Basic',
    links: [{ label: 'GitHub', url: 'https://github.com/prayasjadaun/CodeLoom' }],
  },
]

// Production apps — live on the stores, shown in their own section
export const productionApps = [
  {
    name: 'Housypoint',
    category: 'Real estate',
    icon: Housypoint,
    tone: 'teal',
    description:
      'A real estate marketplace for listing, buying and renting properties — built and shipped end to end in Flutter.',
    features: ['Property listings', 'Buy & rent', 'Flutter'],
    platforms: [
      {
        store: 'play',
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.housypoint.housy_point&pcampaignid=web_share',
      },
      { store: 'apple', label: 'App Store', url: 'https://apps.apple.com/in/app/housypoint/id6749288203' },
    ],
  },
  {
    name: 'Inlobo',
    category: 'Business · CRM',
    initials: 'In',
    tone: 'blue',
    description:
      'An AI-powered CRM that pulls leads from Meta Ads, Google Ads, LinkedIn and website forms into one dashboard, with WhatsApp automation and built-in calling.',
    features: ['Lead capture', 'WhatsApp automation', 'Call logs', 'Analytics'],
    platforms: [
      {
        store: 'play',
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.inlobo.inloboAdmin&hl=en_IN',
      },
      { store: 'apple', label: 'App Store', url: 'https://apps.apple.com/us/app/inlobo/id6759565912' },
    ],
  },
  {
    name: 'Housy Inspect',
    category: 'Business · Inspections',
    initials: 'HI',
    tone: 'peach',
    description:
      'A home inspection management platform for inspection service providers — businesses and independent inspectors join as verified service partners.',
    features: ['Inspection workflow', 'Partner onboarding', 'Verification'],
    platforms: [
      { store: 'apple', label: 'App Store', url: 'https://apps.apple.com/in/app/housy-inspect/id6757533009' },
    ],
    note: 'Android build shared as an APK on request',
  },
]

export const projectFilters = ['All', 'Advance', 'Intermediate', 'Basic']

// Journey — shown like Calendly's Book → Prep → Capture → Follow-up tabs
export const journey = [
  {
    key: 'experience',
    label: 'Experience',
    icon: 'bx bx-briefcase-alt-2',
    items: [
      {
        title: 'Full-stack Mobile App Developer',
        place: 'Pro Housy Point Tech Solution Pvt. Ltd',
        date: 'July 2025 – Present',
      },
    ],
  },
  {
    key: 'internships',
    label: 'Internships',
    icon: 'bx bx-rocket',
    items: [
      {
        title: 'Flutter Developer Intern',
        place: 'Pro Housy Point Tech Solution Pvt. Ltd',
        date: 'Dec 2024 – June 2025',
      },
      {
        title: 'AWS Cloud Computing',
        place: 'Linux World Informatics Pvt. Ltd',
        date: 'April 2023 – July 2023',
      },
      { title: 'WordPress Developer', place: 'Saransh Info Tech', date: 'Jan 2021 – June 2021' },
    ],
  },
  {
    key: 'education',
    label: 'Education',
    icon: 'bx bxs-graduation',
    items: [
      { title: 'Master of Computer Application', place: 'K.R Mangalam University', date: '2023 – 2025' },
      {
        title: "Bachelor's of Computer Science",
        place: 'Dau Dayal Institute of Voc. Education',
        date: '2018 – 2021',
      },
    ],
  },
]

// Tech stack — shown like Calendly's integrations grid
export const skills = [
  { name: 'Flutter', level: 'Advanced', icon: 'bx bx-mobile-alt' },
  { name: 'Android & iOS', level: 'Advanced', icon: 'bx bx-devices' },
  { name: 'Git', level: 'Advanced', icon: 'bx bxl-git' },
  { name: 'GitHub', level: 'Advanced', icon: 'bx bxl-github' },
  { name: 'Dart', level: 'Intermediate', icon: 'bx bx-code-alt' },
  { name: 'Python / Django', level: 'Intermediate', icon: 'bx bxl-python' },
  { name: 'Node / Express', level: 'Intermediate', icon: 'bx bxl-nodejs' },
  { name: 'REST APIs', level: 'Intermediate', icon: 'bx bx-transfer-alt' },
  { name: 'PostgreSQL', level: 'Intermediate', icon: 'bx bxl-postgresql' },
  { name: 'Firebase', level: 'Intermediate', icon: 'bx bxl-firebase' },
  { name: 'SQLite', level: 'Intermediate', icon: 'bx bx-data' },
  { name: 'AWS Cloud', level: 'Intermediate', icon: 'bx bxl-aws' },
  { name: 'Java', level: 'Intermediate', icon: 'bx bxl-java' },
]

export const testimonials = [
  {
    id: 4,
    image: Shiv,
    name: 'Shiv Jindal',
    role: 'Multi Media Designer',
    quote:
      'Working with him has been an incredible experience. His problem-solving skills and attention to detail are exceptional. He consistently delivers high-quality solutions and is always willing to go the extra mile.',
  },
  {
    id: 2,
    image: Khush,
    name: 'Khushnam Chauhan',
    role: 'Full Stack Developer',
    quote:
      'An outstanding Flutter developer, he brings a unique blend of technical skill and creative flair to every project. His commitment to excellence and ability to deliver innovative solutions make him a standout member of any team.',
  },
  {
    id: 5,
    image: Manish,
    name: 'Manish Yadav',
    role: 'Flutter Developer',
    quote:
      'He is an outstanding developer with remarkable coding abilities. His dedication to clean, efficient code and his collaborative approach make him a valuable team member on any project.',
  },
  {
    id: 3,
    image: Akruti,
    name: 'Akruti Singh',
    role: 'Full Stack Developer',
    quote: 'An accomplished Flutter developer, he excels in crafting visually stunning and user-friendly interfaces.',
  },
  {
    id: 1,
    image: Dhananjay,
    name: 'Dhananjay Munda',
    role: 'Frontend Developer',
    quote: 'An app enthusiast always finding creative ideas with the power of code.',
  },
]

export const navLinks = [
  { label: 'Apps', href: '#apps' },
  { label: 'Projects', href: '#work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
]
