// Данные для резюме (источник: https://github.com/Wertiba/Wertiba)
const RESUME_DATA = {
  name: "Роман (Roma)",
  title: "Backend dev · ML researcher · Kaggle notebooks expert",
  bio: "Still in high school, but building pet projects, taking outsource work, and winning olympiads. 3+ years of Python: from Telegram bots to AI/ML (CV and RecSys). Former Test Automation Engineer at ECM-Consulting.",
  links: {
    github: "https://github.com/Wertiba",
    kaggle: "https://kaggle.com/romanrozen",
    email: "example@email.com", // Placeholder
    telegram: "https://t.me/wertiba",
    leetcode: "https://leetcode.com/wertiba"
  },
  achievements: [
    {
      title: "DANO spring SPb hackathon",
      year: "2026",
      description: "🥇 Absolute 1st place. Top-1 solution for data analysis challenge."
    },
    {
      title: "NTO 'Big data and machine learning'",
      year: "2026",
      description: "🏆 Prizer. Recognized for excellence in ML and big data tasks."
    },
    {
      title: "AI Business SPb hackathon",
      year: "2026",
      description: "🥉 3rd Place by case. Developed a backend solution for an AI business case."
    },
    {
      title: "International SWE olympiad PROD",
      year: "2026",
      description: "Finalist in the individual track of the software engineering olympiad."
    },
    {
      title: "Kaggle Notebooks Expert",
      year: "2025",
      description: "Achieved expert status by sharing high-quality notebooks and tutorials."
    }
  ],
  projects: [
    {
      title: "Motivation bot",
      description: "Parses events from Google Calendar and provides personal motivation messages based on LLM (Ollama).",
      link: "https://github.com/Wertiba/TelegramMotivation",
      tags: ["Python", "Telebot", "Ollama", "LLM"]
    },
    {
      title: "Deepfake classifier",
      description: "A classifier built during Yandex Lyceum using CNN and ResNET architectures.",
      link: "https://www.kaggle.com/code/romanrozen/deepfake-classifier",
      tags: ["CNN", "ResNET", "Kaggle", "PyTorch"]
    },
    {
      title: "AI Business SPB Backend",
      description: "Backend repository for the AI Business SPB Hackathon project.",
      link: "https://github.com/Wertiba/AI-Business-SPB-Hackathon-Backend",
      tags: ["Python", "Backend", "Hackathon"]
    }
  ]
};

// Для совместимости
const PARADIGMS = [];
const MILESTONES = [];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RESUME_DATA, MILESTONES, PARADIGMS };
}
