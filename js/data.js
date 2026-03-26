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
    }
  ],

  skills: {
    languages: ["Python", "JavaScript", "HTML", "CSS", "C"],
    frameworks: ["FastAPI", "PyTorch", "OpenCV", "NumPy"],
    tools: ["Git", "GitHub", "VS Code"]
  }
};
