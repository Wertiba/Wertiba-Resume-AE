// Resume data (source: https://github.com/Wertiba/Wertiba)
const RESUME_DATA = {
  name: "Roman",
  title: "Backend dev · ML researcher · Kaggle notebooks expert",
  bio: "Still in high school, but building pet projects, taking outsource work, and winning olympiads. 3+ years of Python: from Telegram bots to AI/ML (CV and RecSys). Former Test Automation Engineer at ECM-Consulting.",
  links: {
    github: "https://github.com/Wertiba",
    kaggle: "https://kaggle.com/romanrozen",
    email: "example@email.com", // Placeholder
    telegram: "https://t.me/wertiba",
    leetcode: "https://leetcode.com/wertiba"
  },
  skills: [
    "Python", "FastAPI", "PyTorch", "scikit-learn", "OpenCV",
    "PostgreSQL", "Docker", "Grafana", "Kotlin", "Git", "Linux",
    "Prometheus", "Telebot", "Ollama"
  ],
  achievements: [
    {
      title: "DANO spring SPb hackathon",
      year: "2026",
      description: "🥇 Absolute 1st place. Top-1 solution for data analysis challenge.",
      details: "DANO (Data Analysis National Olympiad) is a prestigious competition organized by HSE University and Tinkoff. In the Spring SPb Hackathon, our team secured the absolute first place by developing a top-tier data analysis solution, demonstrating advanced skills in exploratory data analysis and predictive modeling."
    },
    {
      title: "NTO 'Big data and machine learning'",
      year: "2026",
      description: "🏆 Prizer. Recognized for excellence in ML and big data tasks.",
      details: "The National Technology Olympiad (NTO) is Russia's largest engineering competition. In the 'Big Data and Machine Learning' track, I was awarded as a prizer. The competition involved solving complex real-world problems using large datasets, deep learning models, and efficient data processing pipelines."
    },
    {
      title: "AI Business SPb hackathon",
      year: "2026",
      description: "🥉 3rd Place by case. Developed a backend solution for an AI business case.",
      details: "At the AI Business SPb Hackathon, our team focused on a business-oriented AI challenge. I was responsible for the backend architecture, ensuring seamless integration between the AI models and the end-user interface. We achieved 3rd place among numerous competitive teams."
    },
    {
      title: "International SWE olympiad PROD",
      year: "2026",
      description: "Finalist in the individual track of the software engineering olympiad.",
      details: "PROD is an international software engineering olympiad held by HSE and Tinkoff. It focuses on industrial development standards. Being a finalist in the individual track confirms my ability to design, implement, and test robust software solutions under time pressure and high-quality requirements."
    },
    {
      title: "Kaggle Notebooks Expert",
      year: "2025",
      description: "Achieved expert status by sharing high-quality notebooks and tutorials.",
      details: "Kaggle is the world's leading data science community. Reaching the 'Expert' status in the Notebooks category requires consistent contribution of high-quality, well-documented, and impactful code that is recognized and upvoted by the community peers."
    }
  ],
  projects: [
    {
      title: "Motivation bot",
      description: "Parses events from Google Calendar and provides personal motivation messages based on LLM (Ollama).",
      details: "This project uses the Google Calendar API to fetch events and Ollama to generate motivational content based on those events. It's built with Python and Telebot for the Telegram interface. The main goal was to create a personalized assistant that keeps the user engaged with their schedule.",
      link: "https://github.com/Wertiba/TelegramMotivation",
      tags: ["Python", "Telebot", "Ollama", "LLM"]
    },
    {
      title: "Deepfake classifier",
      description: "A classifier built during Yandex Lyceum using CNN and ResNET architectures.",
      details: "Developed as a final project for Yandex Lyceum, this classifier distinguishes between real and deepfake images. It utilizes Convolutional Neural Networks (CNN) and pre-trained ResNet models implemented in PyTorch. The project involved data preprocessing, model training, and evaluation on Kaggle datasets.",
      link: "https://www.kaggle.com/code/romanrozen/deepfake-classifier",
      tags: ["CNN", "ResNET", "Kaggle", "PyTorch"]
    },
    {
      title: "AI Business SPB Backend",
      description: "Backend repository for the AI Business SPB Hackathon project.",
      details: "A robust backend solution developed for the AI Business SPB Hackathon. It handles data processing, API endpoints for the frontend, and integration with AI models. The stack includes FastAPI for the web framework and PostgreSQL for data storage. Our team secured 3rd place with this project.",
      link: "https://github.com/Wertiba/AI-Business-SPB-Hackathon-Backend",
      tags: ["Python", "Backend", "Hackathon"]
    }
  ]
};

// For compatibility
const PARADIGMS = [];
const MILESTONES = [];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RESUME_DATA, MILESTONES, PARADIGMS };
}
