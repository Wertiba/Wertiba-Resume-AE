const RESUME_DATA = {
  name: "Твоё Имя",
  title: "ML Engineer / Frontend Developer",
  bio: "Разрабатываю современные веб-приложения и создаю интеллектуальные алгоритмы. Участник соревнований на Kaggle и контестов по программированию.",
  links: {
    github: "https://github.com/username",
    kaggle: "https://www.kaggle.com/username",
    email: "example@email.com",
    telegram: "https://t.me/username"
  },
  achievements: [
    {
      title: "Yandex Cup Finalist",
      year: "2024",
      description: "Вышел в финал крупнейшего чемпионата по программированию в категории Machine Learning."
    },
    {
      title: "Kaggle Master",
      year: "2023",
      description: "Достиг звания Kaggle Notebooks Master, создавая высококачественные туториалы по анализу данных."
    },
    {
      title: "Best Project Award",
      year: "2022",
      description: "Первое место на хакатоне за разработку системы автономного управления дронами."
    }
  ],
  projects: [
    {
      title: "AI Vision App",
      description: "Система распознавания объектов в реальном времени с использованием TensorFlow и Vue3.",
      link: "https://github.com/username/project1",
      tags: ["Python", "TensorFlow", "Vue3"]
    },
    {
      title: "Data Analysis Dashboard",
      description: "Интерактивная панель для визуализации больших данных с Kaggle датасетов.",
      link: "https://github.com/username/project2",
      tags: ["Pandas", "Plotly", "D3.js"]
    },
    {
      title: "Smart Home Backend",
      description: "Масштабируемый бэкенд для управления умным домом на базе FastAPI и Redis.",
      link: "https://github.com/username/project3",
      tags: ["FastAPI", "PostgreSQL", "Docker"]
    }
  ]
};

const PARADIGMS = [];
const MILESTONES = [];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RESUME_DATA, MILESTONES, PARADIGMS };
}
