export interface Skill {
  name: string;
  category: 'backend' | 'frontend' | 'tools';
  url?: string;
}

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export const profileData = {
  name: "Muhammad Fiqri Agustriawan",
  shortName: "fiqri.dev",
  title: "Fullstack Software Engineer | AI Engineer | DevOps",
  location: "Bandung, Indonesia",
  availability: "Open to Opportunities",
  email: "muhfiqri033@gmail.com",
  photoUrl: "/profile_Fiqri.jpeg",
  bioShort: "Building **resilient APIs, optimized databases**, and scalable fullstack solutions. Focused on backend engineering, intelligent systems, and devops automation.",
  bioLong: [
    "I'm a **Fullstack Software Engineer** based in Bandung, Indonesia, specializing in backend engineering, cloud platforms, and DevOps automation. I love designing high-performance systems and building clean, maintainable web applications.",
    "Currently, I am an **Intern at Ashari Tech**, developing web applications using Next.js and modern software stacks. I am also a **BNSP Certified Web Developer**, adhering to professional industry standards in web engineering.",
    "I focus on creating robust backend architectures, optimizing relational databases, and integrating AI operations to deliver end-to-end intelligent systems that solve real-world problems."
  ],
  skills: [
    // Backend (Primary)
    { name: "Laravel", category: "backend", url: "https://github.com/FiqriAgustriawan?tab=repositories&q=&type=&language=php" },
    { name: "Golang", category: "backend", url: "https://github.com/FiqriAgustriawan?tab=repositories&q=&type=&language=go" },
    { name: "Node.js", category: "backend", url: "https://github.com/FiqriAgustriawan?tab=repositories&q=&type=&language=javascript" },
    { name: "MySQL", category: "backend" },
    { name: "PostgreSQL", category: "backend" },
    { name: "API Design", category: "backend" },
    // Frontend
    { name: "React", category: "frontend", url: "https://github.com/FiqriAgustriawan?tab=repositories&q=&type=&language=typescript" },
    { name: "Next.js", category: "frontend", url: "https://github.com/FiqriAgustriawan?tab=repositories&q=&type=&language=typescript" },
    { name: "TypeScript", category: "frontend", url: "https://github.com/FiqriAgustriawan?tab=repositories&q=&type=&language=typescript" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Vite", category: "frontend" },
    // Tools
    { name: "Git", category: "tools" },
    { name: "Supabase", category: "tools" },
    { name: "Firebase", category: "tools" },
    { name: "Docker", category: "tools" },
    { name: "Linux", category: "tools" }
  ] as Skill[],
  experiences: [
    {
      role: "Software Engineer Intern",
      company: "Ashari Tech",
      companyUrl: "https://ashari.tech",
      period: "2024 — Present",
      description: "Developing modern web applications with Next.js, React, and TypeScript. Building scalable user interfaces and integrating backend APIs."
    },
    {
      role: "BNSP Certified Web Developer",
      company: "BNSP Indonesia",
      period: "2024",
      description: "Completed professional web development certification, validating expertise in standards-based web application development."
    }
  ] as Experience[],
  socials: {
    github: "https://github.com/FiqriAgustriawan",
    linkedin: "https://linkedin.com/in/fiqri-agustriawan",
    email: "mailto:muhfiqri033@gmail.com",
    twitter: "https://twitter.com/fiqriagustriawan"
  },
  // Placeholders for Projects Page to show off his works
  projects: [
    {
      title: "Portfolio Website",
      description: "A dark-themed minimalist portfolio inspired by andi.ltd, built using Next.js 16, Tailwind CSS, and custom vanilla components.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "Vanilla CSS"],
      github: "https://github.com/FiqriAgustriawan/portoaing",
      live: "https://fiqrigustriawan.vercel.app",
      featured: true
    },
    {
      title: "Scalable API Gateway",
      description: "A robust API gateway built in Golang, providing routing, rate limiting, and JWT authentication for microservices.",
      tech: ["Golang", "Docker", "Redis", "PostgreSQL"],
      github: "https://github.com/FiqriAgustriawan",
      featured: true
    },
    {
      title: "E-Commerce System",
      description: "A complete e-commerce backend built with Laravel, featuring inventory management, payment gateway integration, and queue systems.",
      tech: ["Laravel", "MySQL", "Redis", "Bootstrap"],
      github: "https://github.com/FiqriAgustriawan",
      featured: false
    }
  ] as Project[],
  footerQuote: "“Simplicity is the ultimate sophistication.”"
};
