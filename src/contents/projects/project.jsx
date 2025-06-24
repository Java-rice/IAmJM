import LivingTrust from "@src/contents/projects/LivingTrust";
import ISchedApp from "@src/contents/projects/ISchedApp";
import UwiShii from "@src/contents/projects/UwiShii";
import FiloTravel from "@src/contents/projects/FiloTravel";
import EthicsFlashcard from "@src/contents/projects/EthicsFlashcard";
import Thesis from "@src/contents/projects/Thesis";
import KomyuSagip from "@src/contents/projects/KomyuSagip";
import DTilapia from "@src/contents/projects/DTilapia";
import DoorMe from "@src/contents/projects/DoorMe";
import ToDoApp from "@src/contents/projects/ToDoApp";

const slugify = (title) =>
  "/projects/" +
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const projectData = [
  {
    title: "Living Trust Management System",
    description:
      "Living Trust Management System is a document automation platform that helps generate U.S. living trust documents through guided forms and multi-role workflow support.",
    categories: ["Web Application", "Real Estate", "Document Generation"],
    images: [
      "./projects/living_trust/living_0.png",
      "./projects/living_trust/living_1.png",
      "./projects/living_trust/living_2.png",
      "./projects/living_trust/living_3.png",
      "./projects/living_trust/living_4.png",
      "./projects/living_trust/living_5.png",
      "./projects/living_trust/living_6.png",
      "./projects/living_trust/living_7.png",
      "./projects/living_trust/living_8.png",
      "./projects/living_trust/living_9.png",
      "./projects/living_trust/living_10.png",
      "./projects/living_trust/living_11.png",
      "./projects/living_trust/living_12.png",
    ],
    toolsUsed: ["Python", "Tkinter"],
    gif: null,
    video: "",
    component: <LivingTrust />,
    date: "February, 2025 - Present",
    live: "https://the-most-comprehensive-living-trust.vercel.app/",
  },
  {
    title: "Ethics Flashcard",
    description:
      "Ethics Flashcard is a creative React-based presentation tool that explores workplace ethics through interactive flashcards and slide for effective learning.",
    categories: ["Web Application", "Game", "Presentation"],
    images: [
      "./projects/ethics/ethics_0.png",
      "./projects/ethics/ethics_1.png",
      // "./projects/ethics/ethics_2.png",
      "./projects/ethics/ethics_3.png",
      "./projects/ethics/ethics_4.png",
      "./projects/ethics/ethics_5.png",
      "./projects/ethics/ethics_6.png",
    ],
    toolsUsed: ["React", "TailwindCSS", "JavaScript"],
    gif: null,
    video: "",
    component: <EthicsFlashcard />,
    date: "March 2025",
    repository: "https://github.com/Java-rice/flashcard-presentation",
    live: "https://flashcard-presentation.vercel.app/",
  },
  {
    title: "SC-β-VAE-GAN: Shift Correction VAE-GAN for Handwriting Time Series",
    description:
      "SC-β-VAE-GAN is a Python-based desktop application that imputes and augments handwriting time series data using a shift-corrected VAE-GAN architecture, designed for researchers and machine learning practitioners.",
    categories: ["Desktop App", "AI/ML", "Handwriting Analysis"],
    images: [
      "./projects/thesis/thesis_0.png",
      "./projects/thesis/thesis_1.png",
      "./projects/thesis/thesis_2.png",
      "./projects/thesis/thesis_3.png",
      "./projects/thesis/thesis_4.png",
      "./projects/thesis/thesis_5.png",
      "./projects/thesis/thesis_6.png",
      "./projects/thesis/thesis_7.png",
      "./projects/thesis/thesis_8.png",
    ],
    toolsUsed: ["Python", "TensorFlow", "Keras", "PyQt5"],
    gif: null,
    video: "",
    component: <Thesis />,
    repository: "https://github.com/Java-rice/Thesis-Project",
    date: "March–May 2025",
  },
  {
    title: "Quick To Do App",
    description:
      "Quick To Do is a simple and efficient React-based task management application. It features task creation with deadlines, toggleable completion status, and persistent localStorage. The user interface is styled with React Bootstrap and supports clearing and marking all tasks in bulk.",
    categories: ["Web Application", "Productivity", "Task Manager"],
    images: [
      "./projects/todo/todo_0.png",
      "./projects/todo/todo_1.png",
      "./projects/todo/todo_2.png",
      "./projects/todo/todo_3.png",
      "./projects/todo/todo_4.png",
    ],
    toolsUsed: ["React", "Bootstrap", "Git", "Github"],
    gif: null,
    video: "",
    component: <ToDoApp />,
    date: "August, 2024",
    repository: "https://github.com/Java-rice/Quick-Todo-App",
    live: "https://lm-todoapp.vercel.app/",
  },
  {
    title: "DOORME: Dormitory Search Platform",
    description:
      "DOORME: is a web-based housing search platform designed to help college students in Metro Manila find safe, affordable, and verified dormitories. It includes features such as an interactive map, price comparisons, availability alerts, verification systems, chat, and document uploads. Built for convenience and security, the platform empowers students to find accommodations that suit their academic life.",
    categories: ["Web Application", "Student Housing", "Map-Based Search"],
    images: [
      "./projects/doorme/doorme_0.png",
      "./projects/doorme/doorme_1.png",
      "./projects/doorme/doorme_2.png",
      "./projects/doorme/doorme_3.png",
      "./projects/doorme/doorme_4.png",
      "./projects/doorme/doorme_5.png",
      "./projects/doorme/doorme_6.png",
      "./projects/doorme/doorme_7.png",
    ],
    toolsUsed: ["React", "TailwindCSS", "Google Maps API", "SQLite"],
    gif: null,
    video: "",
    component: <DoorMe />,
    date: "July, 2024",
    repository: "https://github.com/Java-rice/doorme",
  },
  {
    title: "Filo-Travel",
    description:
      "Filo Travel is a React website that shows popular Philippine travel spots using animations, carousels, videos, and responsive design, aimed at both exploration and learning.",
    categories: ["Website", "Tourist"],
    images: [
      "./projects/filotravel/filotravel_0.png",
      "./projects/filotravel/filotravel_1.png",
      "./projects/filotravel/filotravel_2.png",
      "./projects/filotravel/filotravel_3.png",
      "./projects/filotravel/filotravel_4.png",
      "./projects/filotravel/filotravel_5.png",
      "./projects/filotravel/filotravel_6.png",
      "./projects/filotravel/filotravel_7.png",
      "./projects/filotravel/filotravel_8.png",
    ],
    toolsUsed: ["React", "CSS"],
    gif: null,
    video: "",
    component: <FiloTravel />,
    date: "May 2024",
    repository: "https://github.com/Java-rice/filo-travel",
    live: "https://filo-travel-lyart.vercel.app/",
  },
  {
    title: "D'TILAPIA: Discrete Technologies & Innovative Language",
    description:
      "D'TILAPIA is a custom-designed programming language tailored for Discrete Mathematics. It serves as both a syntax framework and web-based interpreter to help users solve problems in graph theory, set operations, functions, number theory, and more. Developed using Python, Flask, JavaScript, HTML, and CSS, this tool aims to bridge abstract math concepts and code execution with an accessible syntax and live feedback.",
    categories: ["Custom Language", "Discrete Math", "Web App", "Education"],
    images: [
      "./projects/dtilapia/dtilapia_0.png",
      "./projects/dtilapia/dtilapia_1.png",
      "./projects/dtilapia/dtilapia_2.png",
    ],
    toolsUsed: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    gif: null,
    video: "",
    component: <DTilapia />,
    date: "February, 2025",
    repository: "https://github.com/Java-rice/Dtilapia",
  },
  {
    title: "KOMYU-SAGIP: Community Crime Reporting App",
    description:
      "KOMYU-SAGIP is a mobile application designed to promote safety and awareness by allowing users to report crimes, post updates, and send SOS alerts within their communities. Developed by BSCS 3-3 Group 4, it is a public safety app tailored for Filipino communities.",
    categories: ["Mobile App", "Community", "Safety"],
    images: [
      "./projects/komyusagip/komyusagip_0.png",
      "./projects/komyusagip/komyusagip_1.png",
      "./projects/komyusagip/komyusagip_2.png",
      "./projects/komyusagip/komyusagip_3.png",
      "./projects/komyusagip/komyusagip_4.png",
      "./projects/komyusagip/komyusagip_5.png",
      "./projects/komyusagip/komyusagip_6.png",
      "./projects/komyusagip/komyusagip_7.png",
    ],
    toolsUsed: [
      "Java",
      "Kotlin",
      "Firebase",
      "Android Studio",
      "Figma",
      "GitHub",
    ],
    gif: null,
    video: "",
    component: <KomyuSagip />,
    date: "February, 2024",
    repository: "https://github.com/Java-rice/KOMYU-SAGIP-Mobile-Application",
  },
  {
    title: "UWISHII: Crave, Create and Enjoy",
    description:
      "UWI-SHI is a Django-based e-commerce site where users can register, customize bento meals, and order them with ease, created as a final project for an E-Commerce course.",
    categories: ["Web Application", "Food", "Commerce"],
    images: [
      "./projects/uwishii/uwishii_0.png",
      "./projects/uwishii/uwishii_1.png",
      "./projects/uwishii/uwishii_2.png",
      "./projects/uwishii/uwishii_3.png",
      "./projects/uwishii/uwishii_4.png",
      "./projects/uwishii/uwishii_5.png",
      "./projects/uwishii/uwishii_6.png",
      "./projects/uwishii/uwishii_7.png",
    ],
    toolsUsed: ["Django", "SQLite"],
    gif: null,
    video: "",
    component: <UwiShii />,
    date: "July 2023 - August 2023",
    repository: "https://github.com/Java-rice/UWISHI-bentobox-website",
  },

  {
    title: "I-SCHED",
    description:
      "I-SCHED is a Python desktop app that uses smart algorithms like EDF and Knapsack to auto-schedule tasks based on deadlines and importance.",
    categories: ["Desktop App", "Productivity"],
    images: [
      "./projects/isched/Isched_0.png",
      "./projects/isched/Isched_1.png",
      "./projects/isched/Isched_2.png",
      "./projects/isched/Isched_3.png",
      "./projects/isched/Isched_4.png",
      "./projects/isched/Isched_5.png",
      "./projects/isched/Isched_6.png",
      "./projects/isched/Isched_7.png",
      "./projects/isched/Isched_8.png",
    ],
    toolsUsed: ["Python", "Tkinter"],
    gif: null,
    video: "",
    component: <ISchedApp />,
    date: "July, 2022",
    repository: "https://github.com/Java-rice/ISCHED-Scheduling_Application",
  },
];

projectData.forEach((project) => {
  project.link = slugify(project.title);
});

export default projectData;
