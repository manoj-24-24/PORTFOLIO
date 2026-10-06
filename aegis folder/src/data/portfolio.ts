export type SkillGroup = {
  category: string;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
};

export type Repository = {
  name: string;
  description: string;
  technologies: string[];
  url: string;
};

export type AchievementItem = {
  title: string;
  description?: string;
  image?: string;
};

export type CtfKind = "badge" | "room";

export type CtfEntry = {
  title: string;
  kind: CtfKind;
  description: string;
  image: string;
  url: string;
  earned?: string;
  duration?: string;
  learners?: string;
  skills: string[];
};

export type CtfCollection = {
  platform: string;
  handle: string;
  profileUrl: string;
  summary: string;
  entries: CtfEntry[];
};

export type Portfolio = {
  name: string;
  title: string;
  typedRoles: string[];
  profileImage: string;
  aboutHeadline: string;
  about: string;
  location: string;
  education: string;
  linkedinUrl: string;
  githubUrl: string;
  resumeUrl: string;
  email: string;
  contact: {
    name: string;
    email: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
  skills: SkillGroup[];
  certifications: AchievementItem[];
  achievements: AchievementItem[];
  ctf: CtfCollection;
  featuredProduct: {
    name: string;
    role: string;
    image: string;
    appUrl: string;
    documentUrl: string;
    description: string;
    highlights: string[];
  };
  projects: Project[];
  repositories: Repository[];
};

export const portfolio: Portfolio = {
  name: "Manoj K",
  title: "Web Developer & Cybersecurity Developer",
  typedRoles: [
    "BCA Student",
    "Cybersecurity Learner",
    "Web dev",
    "Ethical Hacking Enthusiast"
  ],
  profileImage:
    "/profile.png",
  aboutHeadline:
    "Security-focused full-stack developer crafting intelligent, resilient, and production-ready digital systems.",
  about:
    "I am Manoj K, a BCA student at Bangalore University building modern web applications and growing strong cybersecurity skills. My focus is creating secure, fast, and visually polished digital experiences while learning ethical hacking, web security, and network protection.",
  location: "Bangalore, India",
  education: "BCA Student, Bangalore University",
  linkedinUrl: "https://www.linkedin.com/in/manoj-k-8883b4381",
  githubUrl: "https://github.com/manoj-24-24",
  resumeUrl: "/Resume.pdf",
  email: "moogle.2416@gmail.com",
  contact: {
    name: "Manoj K",
    email: "moogle.2416@gmail.com",
    subjectPlaceholder: "Project, internship, or collaboration",
    messagePlaceholder: "Tell me about your requirement..."
  },
  stats: [
    { value: "12+", label: "Technologies" },
    { value: "5+", label: "Portfolio Projects" },
    { value: "3", label: "Cyber Domains" }
  ],
  skills: [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "php", "MongoDB", "MySQL"]
    },
    {
      category: "Cybersecurity",
      skills: [
        "Ethical Hacking",
        "Linux",
        "Web Security",
        "Network Security",
        "Penetration Testing"]
    },
    {
        category: "Pogramming",
        skills: [
          "c",
        "java",
        "python",
        "MYSQL",
        "mongo db", 
        "DSA in C", 
        "php"
        ]
    }
  ],
  certifications: [
    {
      title: "Google Cybersecurity Professional Certificate",
      description: "Professional cybersecurity learning milestone.",
      image: "/certifications/cert.jpg"
    }
  ],
  achievements: [
    {
      title: "Participated AND Won in IDEATHON in THE NATIONAL COLLEGE 2025",
      description: "Developed a QR safety scanner(QR SHIELD) which will tell whether QR code is safe or not",
      image: "/achievements/W2.JPG"
    },
    {
      title: "Participated AND Won in another STARTUP AT MES in 2026  ",
      description: "Again proposed same QR SHIELD MVP at STAGE-2 .",
      image: "/achievements/W4.jpg"
    },
    {
      title: "Joined hackathon-style coding IN RAMAIAH INSTITUTE OF TECHNOLOGY in 2026",
      description: "Collaborative coding with Deep Backend and Frontend.",
      image: "/achievements/part2.jpg"
    },
  
  {
      title: "Participated Startup - Spark in ATRIA COLLEGE in 2026",
      description: "This time proposed a new secure chat communication app known as AEGIS GUARD.",
      image: "/achievements/part1.png"
    },
   
  {
      title: "Participated IDEATHON in ABBS college in 2026",
      description: "Third Time proposed QR shield MVP with REAL TIME QUISHING attack Demonstration.",
      image: "/achievements/part3.jpg"
    },
  
    {
      title: "Participated IDEATHON in DAYANAND SAGAR COLLEGE IN 2026",
      description: "Proposed a financial system manger on the basis of given problem statement",
      image: "/achievements/part4.jpg"
    }
  
 
 
 
 
 
 
  ],
  ctf: {
    platform: "TryHackMe",
    handle: "cybermano",
    profileUrl: "https://tryhackme.com/p/cybermano",
    summary:
      "Gamified, hands-on security training. Below are the badges I have earned and the rooms I have completed on TryHackMe.",
    entries: [
      {
        title: "Introduction to Security Engineering",
        kind: "badge",
        description: "Completed the Security Engineer Intro room.",
        image: "/ctf/thm-intro-security-engineering.png",
        url: "https://tryhackme.com/cybermano/badges/intro-to-security-engineering",
        earned: "August 10, 2026",
        skills: ["Security Engineering", "Security Fundamentals"]
      },
      {
        title: "cat linux.txt",
        kind: "badge",
        description: "Being competent in Linux - the Terminaled badge.",
        image: "/ctf/thm-cat-linux-txt.png",
        url: "https://tryhackme.com/cybermano/badges/terminaled",
        earned: "July 9, 2026",
        skills: ["Linux", "Terminal", "Command Line"]
      },
      {
        title: "Security Principles",
        kind: "room",
        description:
          "Learn about the security triad and common security models and principles.",
        image: "/ctf/thm-security-principles.png",
        url: "https://tryhackme.com/room/securityprinciples",
        duration: "90 min",
        learners: "253,815",
        skills: ["CIA Triad", "Security Models", "Risk"]
      },
      {
        title: "Cloud Security Pitfalls",
        kind: "room",
        description:
          "Explore the risks companies face when migrating to the cloud, and learn how to address them in a SOC.",
        image: "/ctf/thm-cloud-security-pitfalls.png",
        url: "https://tryhackme.com/room/cloudsecuritypitfalls",
        duration: "30 min",
        learners: "10,182",
        skills: ["Cloud Security", "SOC", "Cloud Risk"]
      }
    ]
  },
  featuredProduct: {
    name: "Aegis Guard",
    role: "Builder of Aegis Guard",
    image: "/aegis-logo.png",
    appUrl: "https://aegis-guard-sjfn.onrender.com/",
    documentUrl: "/aegis-guard-document.pdf",
    description:
      "AI powered cybersecurity communication platform featuring secure messaging, phishing detection, cryptographic analysis, steganography inspection, and intelligent threat monitoring.",
    highlights: [
      "Secure communication",
      "Phishing detection",
      "Threat monitoring",
      "Cryptographic analysis"
    ]
  },
  projects: [
    {
      title: "QR Shield",
      description:
        "QR Shield protects users from malicious QR codes and phishing links with real-time scan safety checks.",
      image: "/qr-shield.png",
      technologies: ["React", "Cybersecurity", "URL Safety", "QR Scanner"],
      githubUrl: "https://github.com/manoj-24-24",
      liveUrl: "https://qr-shield-azv5.onrender.com"
    },
    {
      title: "Password Strength Tool",
      description:
        "Password strength tool is used to detect the strength of password with all combination possibilities to keep you secure and safe.",
      image:
        "https://www.shutterstock.com/image-vector/strong-password-icon-set-containing-260nw-2733476921.jpg",
      technologies: ["html", "css", "javascript"],
      githubUrl: "https://github.com/manoj-24-24/PASSWORD-STRENGTH-TOOL.git",
      liveUrl: "https://manoj-24-24.github.io/PASSWORD-STRENGTH-TOOL/"
    },
    {
      title: "MAN-IN-THE-MIDDLE ATTACK",
      description:
        "Stimulating the man in the middle attack process.",
      image:
        "https://www.certified-nets.com/wp-content/uploads/2025/04/Diagram-showing-common-Man-in-the-Middle-Attack-Methods-and-how-MitM-attacks-work-1200x600.jpg.webp",
      technologies: ["html", "css", "js"],
      githubUrl: "https://github.com/manoj-24-24/MITM--DEMONSTRATION.git",
      liveUrl: "https://manoj-24-24.github.io/MITM--DEMONSTRATION/"
    },
    
  ],
  repositories: [
    {
      name: "Password Strength Tool",
      description: "Password strength tool is used to detect the strength of password with all combination possibilities to keep you secure and safe.",
      technologies: ["html", "css", "javascript"],
      url: "https://github.com/manoj-24-24/PASSWORD-STRENGTH-TOOL.git"
    },
    {
      name: "MAN-IN-THE-MIDDLE ATTACK",
      description: "Stimulating the man in the middle attack process.",
      technologies: ["html", "css", "js"],
      url: "https://github.com/manoj-24-24/MITM--DEMONSTRATION.git"
    }
   
  ]
};
