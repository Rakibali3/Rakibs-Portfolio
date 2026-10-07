export const PROFILE = {
  name: "Mohammad Raquib Ali",
  short: "Raquib",
  roles: ["Full-Stack Developer", "React Engineer", "Pega CSA"],
  location: "Bhimavaram, Andhra Pradesh, India",
  email: "rakibaibvrm13@gmail.com",
  phone: "7842663649",
  github: "https://github.com/Rakibali3",
  linkedin: "https://linkedin.com/in/mohammad-raquib-ali-94160823b",
};

export const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mohammad-raquib-ali-94160823b",
    icon: "linkedin" as const,
  },
  { label: "GitHub", href: "https://github.com/Rakibali3", icon: "github" as const },
  { label: "Instagram", href: "https://www.instagram.com/rakib_mohammad03/", icon: "instagram" as const },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCWvEvpWJ2y_suU3V6GkS1EQ", icon: "youtube" as const },
];

export const googleDriveFileID = "15LmyZDyeXvjuU4rlBk-X6nohEqF13uld";

export const downloadLink = `https://drive.google.com/uc?export=download&id=${googleDriveFileID}`;

export const STATS = [
  { value: "8.8", label: "B.Tech CGPA" },
  { value: "1+", label: "Years at Cognizant" },
  { value: "10+", label: "Technologies" },
  { value: "3", label: "Shipped projects" },
];

export const MARQUEE = [
  "React.js",
  "Node.js",
  "Express",
  "JavaScript",
  "Java",
  "Python",
  "MongoDB",
  "MySQL",
  "Tailwind",
  "Redux Toolkit",
  "Pega",
  "Flask",
];

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Flask", "EJS", "REST APIs", "Auth & Hashing"],
  },
  {
    title: "Data & Platform",
    items: ["MongoDB", "MySQL", "Pega Infinity", "Java", "Python", "Git"],
  },
];

export const PROJECTS = [
  {
    title: "SkillBridge",
    year: "2026",
    blurb:
      "A full-stack skill-sharing platform where users can manage their skills, discover personalized matches, exchange knowledge, communicate in real time, and follow learning paths.",
    tags: [
      "React",
      "Tailwind CSS",
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "WebSocket",
      "React Query",
      "Cloudinary"
    ],
    highlight: "Skill matching + real-time communication",
    github: "https://github.com/Rakibali3/Skill-Bridge.git"
  },
  {
    title: "QA Crafter",
    year: "2025",
    blurb:
      "Group project that summarises text or PDF input, then generates question-and-answer sets from the summary using a Python/Flask service.",
    tags: ["React.js", "Tailwind", "Python", "Flask"],
    highlight: "PDF → summary → Q&A pipeline",
    github: "https://github.com/Rakibali3/NLP-PROJECT.git",
  },
  {
    title: "Event Management System",
    year: "2024",
    blurb:
      "A full event platform with secure sign-up and login, event sharing and registration, plus an admin surface to create, post and delete events.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL"],
    highlight: "Password hashing + session auth",
    github: "https://github.com/Rakibali3/Event-Management-System.git",
  },
  {
    title: "Food Ordering Website",
    year: "2024",
    blurb:
      "React app consuming the Swiggy live API with an Express + MongoDB backend for authentication and Redux Toolkit driving global state.",
    tags: ["React.js", "Tailwind", "Redux Toolkit", "MongoDB"],
    highlight: "Live API + cart state",
    github: "https://github.com/Rakibali3/React.git",
  },
];

export const EXPERIENCE = [
  {
    period: "Jun 2025 — Jun 2026",
    role: "Program Analyst Trainee",
    org: "Cognizant Technology Solutions",
    points: [
      "Built and supported enterprise applications across requirement analysis, coding, testing and production support.",
      "Partnered with cross-functional teams to ship effective business solutions.",
      "Troubleshot and resolved application issues to keep operations smooth.",
    ],
  },
];

export const EDUCATION = [
  {
    period: "2021 — 2025",
    title: "B.Tech, Information Technology",
    org: "Vishnu Institute of Technology",
    detail: "Specialisation in software development and web technologies · CGPA 8.8",
  },
  {
    period: "2019 — 2021",
    title: "Intermediate (MPC)",
    org: "Sri Chaitanya Jr College",
    detail: "Mathematics, Physics and Chemistry · CGPA 9.22",
  },
  {
    period: "2018 — 2019",
    title: "Secondary School Education",
    org: "Wonder Kids E.M High School",
    detail: "GPA 9.2",
  },
];

export const EXTRAS = [
  "Certified Pega System Architect (CSA 24)",
  "Best Project Award — Full Stack Development",
  "GenZ AI Competition participant",
];
