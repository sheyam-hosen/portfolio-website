export interface ProjectItem {
  id: string;
  title: string;
  repoName: string;
  category: string;
  badge: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  features?: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillItem {
  name: string;
  category: string;
  level: string;
  highlight?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  result: string;
  location: string;
  description: string;
  verifiedBadges?: string[];
}

export interface HighlightItem {
  title: string;
  description: string;
  icon: string;
}

export const personalData = {
  name: "MOHAMMAD SHEYAM HOSEN",
  role: "Full Stack Developer",
  specialization: "React.js, Next.js & TypeScript",
  tagline: "Turning Ideas Into Modern Web Experiences",
  location: "Bangladesh",
  email: "mohammadsheyamhosen@gmail.com",
  secondaryEmail: "md.siam8990100@gmail.com",
  phone: "+8801862267152",
  phoneUrl: "tel:+8801862267152",
  whatsappUrl: "https://wa.me/8801862267152",
  whatsappNumber: "+8801862267152",
  githubUrl: "https://github.com/sheyam-hosen",
  githubUsername: "sheyam-hosen",
  linkedinUrl: "https://www.linkedin.com/in/sheyam-hosen/",
  linkedinUsername: "sheyam-hosen",
  existingPortfolioUrl: "https://sheyam-hosen.netlify.app/",
  profileImage: "/images/profile.jpg",
  resumePdf: "/resume.pdf",
  status: "Open for Full Stack & Frontend Engineering Roles",
  bioIntro:
    "I am a passionate Full Stack Developer focused on building modern, responsive, and user-friendly web applications using modern web technologies. I enjoy creating beautiful interfaces, solving problems, and developing meaningful digital experiences.",
  shortBio:
    "Dedicated developer from Bangladesh passionate about crafting fast, accessible, and visually stunning web interfaces with React, Next.js, TypeScript, and Tailwind CSS. Constantly learning and building real-world projects with clean component architecture.",
  aboutText:
    "I'm MOHAMMAD SHEYAM HOSEN, a passionate Full Stack Developer from Bangladesh. I enjoy building modern, responsive, and user-friendly web applications. I am continuously learning new technologies and improving my development skills to create better digital experiences.",
  aboutSubtext:
    "With a strong foundation in modern frontend architecture and hands-on experience in full-stack concepts, I design and develop high-performance web applications that balance striking UI/UX design with clean, scalable code.",
};

export const aboutHighlights: HighlightItem[] = [
  {
    title: "Clean & Maintainable Code",
    description:
      "Writing modular, self-documenting, and scalable code following industry best practices and strict TypeScript typing.",
    icon: "Code2",
  },
  {
    title: "Responsive Web Design",
    description:
      "Ensuring seamless cross-device experiences from compact smartphones to ultra-wide desktop monitors with zero layout shifts.",
    icon: "Smartphone",
  },
  {
    title: "Fast Learner & Adaptable",
    description:
      "Rapidly adopting modern web technologies, libraries, and frameworks to deliver innovative digital solutions.",
    icon: "Zap",
  },
  {
    title: "Problem Solving",
    description:
      "Approaching technical challenges methodically with analytical debugging, algorithm optimization, and persistent troubleshooting.",
    icon: "Brain",
  },
  {
    title: "Modern Web Development",
    description:
      "Leveraging Next.js App Router, React 19, Tailwind CSS, and server-side rendering for lightning-fast performance.",
    icon: "Globe",
  },
  {
    title: "User-Friendly Interfaces",
    description:
      "Designing accessible, intuitive UI/UX workflows with smooth micro-interactions that captivate and delight users.",
    icon: "Layout",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frameworks & Styling",
    description:
      "Modern reactive web frameworks, type-safe development, and utility-first styling systems.",
    skills: [
      {
        name: "React.js",
        category: "Frameworks & Styling",
        level: "Core Focus",
        highlight: "Hooks, functional architecture, Suspense, state management",
      },
      {
        name: "Next.js",
        category: "Frameworks & Styling",
        level: "Core Focus",
        highlight: "App Router, Server Components, SSR & full-stack integration",
      },
      {
        name: "TypeScript",
        category: "Frameworks & Styling",
        level: "Advanced",
        highlight: "Interfaces, types, generics, prop typing, robust code safety",
      },
      {
        name: "Tailwind CSS",
        category: "Frameworks & Styling",
        level: "Core Focus",
        highlight: "Rapid utility styling, custom themes, responsive design",
      },
    ],
  },
  {
    title: "Core Frontend & Web Standards",
    description:
      "Solid foundation in web standards, asynchronous programming, semantic structure, and mobile-first layouts.",
    skills: [
      {
        name: "JavaScript (ES6+)",
        category: "Core Frontend",
        level: "Proficient",
        highlight: "DOM manipulation, promises, async/await, modern array methods",
      },
      {
        name: "HTML5",
        category: "Core Frontend",
        level: "Proficient",
        highlight: "Semantic markup, accessibility, SEO structure",
      },
      {
        name: "CSS3",
        category: "Core Frontend",
        level: "Proficient",
        highlight: "Flexbox, CSS Grid, transitions, responsive layouts",
      },
      {
        name: "Responsive Design",
        category: "Core Frontend",
        level: "Proficient",
        highlight: "Mobile-first mindset, fluid typography, cross-device testing",
      },
    ],
  },
  {
    title: "Backend, APIs & Development Tools",
    description:
      "Server-side technologies, REST API consumption, version control, build tools, and developer workflows.",
    skills: [
      {
        name: "Node.js",
        category: "Backend & APIs",
        level: "Intermediate",
        highlight: "Server-side runtime, modular backend logic, package scripts",
      },
      {
        name: "REST APIs",
        category: "Backend & APIs",
        level: "Proficient",
        highlight: "Real-time async data fetching, error handling & JSON contracts",
      },
      {
        name: "Git",
        category: "Workflow & Tools",
        level: "Proficient",
        highlight: "Version control, commit hygiene, branch management",
      },
      {
        name: "GitHub",
        category: "Workflow & Tools",
        level: "Proficient",
        highlight: "Repositories, GitHub Pages deployment, open collaboration",
      },
      {
        name: "Vite",
        category: "Workflow & Tools",
        level: "Proficient",
        highlight: "Lightning-fast modern build tooling, dev server & bundling",
      },
      {
        name: "VS Code",
        category: "Workflow & Tools",
        level: "Proficient",
        highlight: "Developer environment, productivity extensions & debugging",
      },
    ],
  },
];

export const featuredProjects: ProjectItem[] = [
  {
    id: "my-fast-assignment-1",
    title: "DevConf 2026 — Developer Conference Platform",
    repoName: "sheyam-hosen/My-Fast-assignment-1",
    category: "HTML & CSS",
    badge: "Responsive Web",
    description:
      "High-impact landing page for DevConf 2026 international developer conference featuring keynote speaker showcases, 3-tier pass pricing breakdown, event schedules, and mobile-first CSS architecture.",
    longDescription:
      "Designed with responsive layout, custom typography, keynote speaker roster, interactive 3-tier pricing tables, and fluid mobile, tablet, and desktop responsive breakpoints.",
    image: "/images/devconf_banner.jpg",
    tags: ["HTML5", "CSS3", "Responsive Design", "GitHub Pages"],
    features: [
      "Keynote speaker roster with custom card layouts",
      "Interactive 3-tier pricing table with highlighted Pro tier",
      "Genuine Live Deployment hosted on GitHub Pages",
      "Fluid mobile, tablet, and desktop responsive breakpoints",
    ],
    githubUrl: "https://github.com/sheyam-hosen/My-Fast-assignment-1",
    liveUrl: "https://sheyam-hosen.github.io/My-Fast-assignment-1/",
    featured: true,
  },
  {
    id: "dev-stack",
    title: "DevStack — Tech Stack Explorer & Builder",
    repoName: "sheyam-hosen/Dev-Stack",
    category: "React & TypeScript",
    badge: "Featured React App",
    description:
      "A web application to explore frontend, backend, database, and development tools and build a custom technology stack with real-time state management, category filtering, and difficulty metrics.",
    longDescription:
      "Built with React, TypeScript, Tailwind CSS, and Vite to showcase curated developer technologies, navigation layouts, and reusable components with high-performance HMR.",
    image: "/images/devstack.png",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Vite"],
    features: [
      "Interactive Stack Builder supporting up to 12 curated technologies",
      "Dynamic filtering by category, difficulty badges & user ratings",
      "Persistent state handling with add/remove and bulk clear controls",
      "Clean TypeScript interfaces for complete type safety",
    ],
    githubUrl: "https://github.com/sheyam-hosen/Dev-Stack",
    featured: true,
  },
  {
    id: "book-vibe",
    title: "Book Vibe — Book Management & Catalog Explorer",
    repoName: "sheyam-hosen/book-vibe",
    category: "Next.js & TypeScript",
    badge: "Featured Next.js App",
    description:
      "A modern book discovery application where users can explore books, view details, manage reading lists, and maintain a wishlist with dynamic rating analytics and responsive layout.",
    longDescription:
      "Features interactive book categorization, dynamic reading list tracking, visual rating analytics powered by Recharts, responsive layout, and toast notification alerts. Demonstrates modern App Router patterns and TypeScript interfaces.",
    image: "/images/book_vibe.png",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS"],
    features: [
      "Dynamic book catalog with categorized filtering and search",
      "Visual reading statistics and analytics powered by Recharts",
      "Persistent reading wishlist and completed reading shelves",
      "Fully responsive Next.js App Router layout with custom toasts",
    ],
    githubUrl: "https://github.com/sheyam-hosen/book-vibe",
    liveUrl: "https://sheyam-hosen-book-vibe-zla1.vercel.app/",
    featured: true,
  },
  {
    id: "my-fast-nextjs-app",
    title: "My Fast Next.js App — Full-Stack Starter",
    repoName: "sheyam-hosen/my-fast-nextjs-app",
    category: "Next.js & JavaScript",
    badge: "Next.js 16 & React 19",
    description:
      "A modern full-stack web application built with Next.js 16 App Router, React 19, and Tailwind CSS v4 featuring modular UI components, server-side rendering, and responsive styling.",
    longDescription:
      "Showcases modern full-stack development with Next.js 16, React 19 architecture, Geist font optimization, modular component directory structure, and high-performance server components.",
    image: "/images/nextjs_fast_app.svg",
    tags: ["Next.js", "React 19", "JavaScript", "Tailwind CSS"],
    features: [
      "Built with Next.js 16 App Router and React 19 architecture",
      "Tailwind CSS v4 utility styling with dark theme support",
      "Optimized font and asset loading with Geist font family",
      "Scalable component folder structure and production scripts",
    ],
    githubUrl: "https://github.com/sheyam-hosen/my-fast-nextjs-app",
    featured: true,
  },
  {
    id: "oibsip-temperature-converter",
    title: "Temperature Converter — Web Application",
    repoName: "sheyam-hosen/OIBSIP",
    category: "HTML & CSS",
    badge: "Web Internship Project",
    description:
      "Clean and interactive temperature converter web tool built during the Oasis Infobyte internship, converting Celsius, Fahrenheit, and Kelvin in real time with responsive card design.",
    longDescription:
      "Oasis Infobyte Web Development & Designing Internship project repository showcasing practical front-end implementations, clean CSS Flexbox design, and real-time input conversion math.",
    image: "/images/temperature_converter.svg",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    features: [
      "Instant multi-unit conversion between Celsius, Fahrenheit & Kelvin",
      "Interactive, responsive glassmorphic card interface",
      "Input validation and error handling for numeric entries",
      "Mobile-optimized layout crafted with modern CSS Flexbox",
    ],
    githubUrl: "https://github.com/sheyam-hosen/OIBSIP",
    featured: true,
  },
  {
    id: "fitlog-fitness-tracker",
    title: "FitLog – Workout & Fitness Tracker",
    repoName: "sheyam-hosen/-assignment--6-fite-logo-",
    category: "Next.js & TypeScript",
    badge: "Full-Stack App",
    description:
      "FitLog is a modern and responsive fitness tracking web application built with Next.js to explore workout libraries, view exercise details, save favorite routines, and manage daily fitness plans.",
    longDescription:
      "Engineered with Next.js 16, TypeScript, Tailwind CSS, DaisyUI, and REST API integration to deliver seamless fitness logging, workout duration tracking, and dynamic calorie burn estimations.",
    image: "/images/fitlog_tracker.svg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "DaisyUI", "REST API"],
    features: [
      "Workout Library to explore exercises with intensity metrics",
      "Save favorite workouts and custom fitness routines",
      "Daily Workout Plan with duration tracking and calorie estimations",
      "Type-safe Next.js architecture with DaisyUI responsive styling",
    ],
    githubUrl: "https://github.com/sheyam-hosen/-assignment--6-fite-logo-",
    liveUrl: "https://assignment-6-fite-logo-mdsiam8990100-4383.vercel.app",
    featured: true,
  },
];

export const educationHistory: EducationItem[] = [
  {
    institution: "Intensive Practical Web Development Curriculum",
    degree: "Frontend Web Development & Modern JavaScript/React Studies",
    year: "2024 – Present",
    result: "Active Learning & Project Building",
    location: "Bangladesh",
    description:
      "Deep, hands-on study of modern frontend engineering: mastering HTML5/CSS3 foundations, modern ECMAScript/JavaScript, React 19 component design, TypeScript type safety, and real-world API consumption.",
    verifiedBadges: [
      "React.js",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "API Integration",
      "Git/GitHub",
    ],
  },
  {
    institution: "Academic Education in Bangladesh",
    degree: "Higher Secondary & Computing Education (SSC Ongoing)",
    year: "Ongoing",
    result: "Verified Personal Background",
    location: "Bangladesh",
    description:
      "Solid mathematical and computing fundamentals fostering logical reasoning, problem-solving skills, and systematic computational thinking.",
    verifiedBadges: [
      "Analytical Thinking",
      "Problem Solving",
      "Computing Basics",
      "Mathematics",
    ],
  },
];
