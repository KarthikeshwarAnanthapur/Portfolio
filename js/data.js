const portfolioData = {
  personal: {
    name: "Karthikeshwar Ananthapur",
    title: "B.Tech Student | AI & Web Developer",
    intro: "I'm a 2nd year B.Tech student passionate about building intelligent systems and clean web experiences. I work at the intersection of AI and web development.",
    github: "https://github.com/KarthikeshwarAnanthapur",
    linkedin: "https://linkedin.com/in/karthikeshwar0617"
  },

  about: {
    bio: "Hey, I'm Karthikeshwar — a B.Tech student with a strong interest in AI, machine learning, and web development. I enjoy turning ideas into real projects that solve actual problems.",
    education: {
      degree: "B.Tech in Computer Science & Engineering",
      year: "2nd Year",
      institution: "Keshav Memorial College of Engineering"
    },
    currentlyLearning: [
      "Machine Learning",
      "Vision Transformers (ViT)",
      "Cybersecurity Fundamentals",
      "Deep Learning with PyTorch"
    ]
  },

  typingRoles: [
    "AI Developer",
    "Web Developer",
    "Cybersecurity Learner",
    "ML Enthusiast",
    "Open Source Learner"
  ],

  projects: [
    {
      id: "expenses",
      title: "Student Expenses Tracker",
      description: "A web app to track daily student expenses with categories and monthly summaries.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/KarthikeshwarAnanthapur/Student-expenses-tracker",
      details: "Built a fully client-side expense tracker that lets students log daily expenses, categorize them, and view monthly breakdowns. Uses localStorage for persistence — no backend needed.",
      features: [
        "Add, edit, and delete expense entries",
        "Category-wise breakdown",
        "Monthly summary view",
        "LocalStorage persistence"
      ]
    },
    {
      id: "deepfake",
      title: "Deepfake Detection",
      description: "AI model to detect manipulated videos using Vision Transformers and deep learning.",
      tech: ["Python", "OpenCV", "PyTorch", "FastAPI"],
      github: "https://github.com/KarthikeshwarAnanthapur/Deepfake-Detection-Project",
      details: "Developed a deepfake detection system using a Vision Transformer (ViT) architecture trained on the Celeb-DF dataset. Built a FastAPI backend and a clean web frontend for image upload and prediction.",
      features: [
        "Vision Transformer (ViT) architecture",
        "Face extraction with OpenCV",
        "REST API via FastAPI",
        "Confidence score output"
      ]
    },
    {
  id: "keyxpulse",
  title: "KeyXPulse – AI Typing Coach",
  description: "A modern AI-powered typing platform with real-time analytics, smart feedback, and predictive performance insights.",
  tech: ["React", "Vite", "Tailwind CSS", "Chart.js", "TensorFlow.js"],
  github: "https://github.com/KarthikeshwarAnanthapur/KeyXPulse",
  details: "Built a full-featured AI typing coach using React and Vite with a focus on clean UI and real-time interaction. The application includes customizable time-based typing tests, a backspace-disabled challenge mode, and intelligent feedback based on user performance. Integrated charts for progress tracking and implemented predictive analytics using lightweight machine learning.",
  features: [
    "Custom time-based typing tests (10s to 5min)",
    "Backspace-disabled challenge mode",
    "Real-time WPM, accuracy, and error tracking",
    "Weak key detection and AI-driven suggestions",
    "Interactive performance graphs using Chart.js",
    "Typing history stored using localStorage",
    "Predictive typing performance using TensorFlow.js",
    "Modern aesthetic UI with smooth animations and transitions"
    ]
  },
    {
    id: "networksniffer",
    title: "Basic Network Sniffer",
    description: "A Python-based network packet sniffer for real-time traffic analysis using Scapy.",
    tech: ["Python", "Scapy", "Networking", "Cybersecurity"],
    github: "https://github.com/KarthikeshwarAnanthapur/CodeAlpha_BasicNetworkSniffer",
    details: "Developed a real-time network packet sniffer using Python and Scapy to capture and analyze live network traffic. The tool extracts source and destination IP addresses, detects TCP/UDP protocols, monitors ports, and performs packet metadata analysis while following safe and ethical cybersecurity practices.",
    features: [
      "Real-time packet capturing",
      "TCP and UDP protocol detection",
      "Source & destination IP analysis",
      "Port monitoring and packet inspection",
      "Packet length tracking",
      "Privacy-safe IP masking for demonstrations",
      "Packet logging support",
      "Built using Scapy for packet analysis"
    ]
  },
    {
    id: "safebait",
    title: "SafeBait – Phishing Awareness Platform",
    description: "A futuristic cybersecurity awareness platform focused on phishing education, social engineering, and safe online practices.",
    tech: ["HTML", "CSS", "JavaScript", "Cybersecurity", "UI/UX"],
    github: "https://github.com/KarthikeshwarAnanthapur/CodeAlpha_PhishingAwarenessTraining",
    details: "Developed SafeBait, an interactive phishing awareness platform designed to educate users about phishing attacks, social engineering tactics, and cybersecurity best practices. Built with a modern cyberpunk-inspired UI featuring smooth animations, interactive learning sections, phishing awareness content, safety tips, and a fully integrated cybersecurity presentation module.",
    features: [
      "Modern cyberpunk-inspired UI design",
      "Interactive phishing awareness training",
      "Types of phishing attack explanations",
      "Social engineering awareness section",
      "Fake vs real phishing content analysis",
      "Cybersecurity safety tips and best practices",
      "Interactive phishing awareness quiz",
      "Integrated cybersecurity presentation module",
      "Responsive design for desktop and mobile",
      "Smooth animations and glowing cyber effects",
      "Live deployment using Vercel",
      "Portfolio-ready cybersecurity project"
    ]
  },
  {
  id: "codeshield",
  title: "CodeShield – Secure Coding Review Platform",
  description: "A beginner-friendly cybersecurity platform focused on secure coding practices, vulnerability analysis, and manual code review techniques.",
  tech: ["HTML", "CSS", "JavaScript", "Cybersecurity", "UI/UX"],
  github: "https://github.com/KarthikeshwarAnanthapur/CodeAlpha_SecureCodingReview",
  details: "Developed CodeShield, an interactive secure coding review platform designed to educate users about common security vulnerabilities, secure coding standards, and remediation techniques. The project demonstrates manual code inspection methods, vulnerable vs secure code comparisons, cybersecurity best practices, and an interactive security awareness quiz through a clean cyber-themed UI.",
  features: [
    "Modern cybersecurity-inspired UI design",
    "Manual secure coding review workflow",
    "Common vulnerability analysis and explanations",
    "Vulnerable vs secure code comparisons",
    "SQL Injection and XSS awareness modules",
    "Secure coding best practices section",
    "Interactive cybersecurity challenge quiz",
    "Security audit report dashboard",
    "Responsive multi-page web design",
    "Neon cyber-themed animations and effects",
    "Live deployment using Vercel",
    "Portfolio-ready cybersecurity project"
  ]
},
    {
      id: "portfolio",
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website to showcase my projects and skills.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/KarthikeshwarAnanthapur/Portfolio",
      details: "Built a clean, professional portfolio website from scratch using HTML, CSS, and vanilla JavaScript. Features include a responsive layout, smooth scrolling, and a dedicated projects section.",
      features: [
        "Responsive design for desktop and mobile",
        "Smooth scrolling and navigation",
        "Dedicated project showcase pages",
        "Easy to maintain structure"
      ]
    }
  ],

  skills: {
    languages: ["C", "Python", "Java", "HTML", "CSS", "JavaScript"],
    frameworks: ["PyTorch", "OpenCV", "NumPy", "FastAPI", "Scapy"],
    tools: ["VS Code", "GitHub", "Git"]
  }
};
