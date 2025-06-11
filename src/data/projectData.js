const projects = [
  {
    title: "NextRole",
    url: "", // Replace with your actual domain
    img: "/nextrole.webp", // Add your image to public/nextrole.webp
    type: "Job Application Tracker",
    desc: "Track job applications effortlessly.",
    info: `NextRole is a powerful job tracking tool designed for junior developers and job seekers. Organize applications by stages like Wishlist, Applied, Interview, and Offer. Create custom boards for different job search goals, and manage all your opportunities in one place.`,
    role: "I designed and developed the entire system using modern web technologies. My contributions included drag-and-drop interfaces, auth integration, and a dynamic job board system.",
    lang: "TypeScript, HTML, CSS",
    framework: "Next.js, TailwindCSS, Shadcn UI",
    database: "PostgreSQL (via Neon Serverless Postgres)",
    payment: "N/A",
    design: "Figma",
    challenge:
      "Job seekers, especially juniors, often lose track of where and when they’ve applied, missing out on opportunities and follow-ups.",
    solution:
      "NextRole centralizes job applications into visual boards, with the ability to customize, track, and reflect on job search progress easily.",
    vid1: "/nextrole.mp4", // Add video to public/nextrole.mp4
    vid2: "/nextrole-mobile.mp4", // Add mobile video to public/nextrole-mobile.mp4
  },
  {
    title: "EZ-POS",
    url: "https://ezpos.pages.dev/",
    img: "/ezpos.webp",
    type: "Point of Sale Web App.",
    desc: "User-friendly point-of-sale software",
    info: `EZ-Pos is a user-friendly point-of-sale software designed to streamline retail operations...`,
    role: "My key contributions included designing the software architecture, developing the front-end interface and backend development.",
    lang: "Typescript, HTML, CSS",
    framework: "React, Nodejs, TailwindCSS",
    database: "Postgres",
    payment: "N/A",
    design: "Behance",
    challenge:
      "Many small retailers use manual processes for inventory management and sales tracking...",
    solution:
      "EZ-Pos automates inventory management, providing real-time updates and alerts...",
    vid1: "/EZ-POS.mp4",
    vid2: "/EZ-POS-mobile.mp4",
  },
  {
    title: "GH Heating and Cooling",
    url: "https://gh-steel.vercel.app/",
    img: "/gh.webp",
    type: "HVAC Business Website",
    desc: "Service request and quote platform for HVAC company",
    info: `GH Heating and Cooling is a professional landing page built for an HVAC business to showcase services and allow clients to request service via an online form. It includes a clean, responsive design with key information about the company, services offered, and an easy-to-use contact form.`,
    role: "I handled the design and development of the landing page, including responsive layout and form setup.",
    lang: "Typescript, HTML, CSS",
    framework: "React.js, TailwindCSS, Shadcn UI",
    database: "N/A",
    payment: "N/A",
    design: "Figma",
    challenge:
      "Local service providers often lack a modern web presence, making it harder for potential customers to reach them or understand what services are offered...",
    solution:
      "GH Heating and Cooling offers a clean, mobile-friendly page that allows customers to quickly understand services and submit a service request form...",
    vid1: "/gh.mp4",
    vid2: "/gh-mobile.mp4",
  },
  {
    title: "Torres Cleaning",
    url: "https://cleaning-service-orcin.vercel.app/",
    img: "/torres.webp",
    type: "Cleaning Service Platform",
    desc: "Booking, quotes, and appointment management for Torres Cleaning Co.",
    info: `Torres Cleaning is a modern web platform built for cleaning service businesses to streamline client interaction and internal operations. Clients can request quotes through an elegant landing page, and upon approval, receive payment links via SMS or email. The system allows business owners to track daily appointments, payment statuses, and manage communication in one place.`,
    role: "I led the design, development, and deployment of the full-stack application including the dashboard, admin tools, payment flow, and cleaner tracking.",
    lang: "Typescript, HTML, CSS",
    framework: "Next.js, Node.js, TailwindCSS",
    database: "PostgreSQL",
    payment: "Stripe / Zelle",
    design: "Figma",
    challenge:
      "Cleaning companies often rely on notebooks or basic spreadsheets to manage their appointments and client communication...",
    solution:
      "Torres Cleaning centralizes quote requests, appointment tracking, and client communication into a single dashboard...",
    vid1: "/CleanWave.mp4",
    vid2: "/CleanWave-mobile.mp4",
  },

  {
    title: "Rulay",
    url: "https://rulay.pages.dev/",
    img: "/rulay.webp",
    type: "Traveling website",
    desc: "Discover amazing places.",
    info: `Discover the vibrant beauty of the Dominican Republic with Rulay!...`,
    role: "As the project lead and web developer...",
    lang: "Javascript, HTML, CSS",
    framework: "React, Nodejs, TailwindCSS",
    database: "MongoDB",
    payment: "N/A",
    design: "Figma",
    challenge:
      "Many travelers struggle to find reliable and comprehensive information...",
    solution: "Rulay organizes information into easily navigable categories...",
    vid1: "/Rulay.mp4",
    vid2: "/Rulay-mobile.mp4",
  },
  {
    title: "Codevenue",
    url: "https://codevenue.pages.dev/",
    img: "/codevenue.webp",
    type: "Music Web App",
    desc: "Lofi music web app for developers",
    info: `Welcome to CodeVenue, where coding meets creativity through lofi music...`,
    role: "As the project creator and web developer...",
    lang: "Typescript, HTML, CSS.",
    framework: "React, Nodejs, TailwindCSS.",
    database: "MongoDB and Google Cloud.",
    payment: "N/A",
    design: "Figma.",
    challenge: "Many developers struggle to find the right music...",
    solution:
      "CodeVenue offers a carefully curated selection of lofi tracks...",
    vid1: "/Codevenue.mp4",
    vid2: "/Codevenue-mobile.mp4",
  },
];

export default projects;
