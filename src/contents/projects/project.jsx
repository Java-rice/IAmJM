import LivingTrust from "@src/contents/projects/LivingTrust";
import ISchedApp from "@src/contents/projects/ISchedApp";
import UwiShii from "@src/contents/projects/UwiShii";

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
    title: "UWISHII: Crave, Create and Enjoy",
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
    component: <UwiShii />,
    date: "July, 2022",
    repository: "https://github.com/Java-rice/UWISHI-bentobox-website",
  },
  {
    title: "I-SCHED",
    description:
      "I-SCHED is a Python desktop app that uses smart algorithms like EDF and Knapsack to auto-schedule tasks based on deadlines and importance.",
    categories: ["Desktop App", "Productivity"],
    images: [
      "./projects/uwishii/Uwishii_0.png",
      "./projects/uwishii/Uwishii_1.png",
      "./projects/uwishii/Uwishii_2.png",
      "./projects/uwishii/Uwishii_3.png",
      "./projects/uwishii/Uwishii_4.png",
      "./projects/uwishii/Uwishii_5.png",
      "./projects/uwishii/Uwishii_6.png",
      "./projects/uwishii/Uwishii_7.png",
      "./projects/uwishii/Uwishii_8.png",
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
