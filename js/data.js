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
      "Deep Learning with PyTorch"
    ]
  },

  typingRoles: [
    "AI Developer",
    "Web Developer",
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
    frameworks: ["PyTorch", "OpenCV", "NumPy", "FastAPI"],
    tools: ["VS Code", "GitHub", "Git"]
  }
};
