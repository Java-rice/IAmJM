import WeatherApp from "@src/contents/projects/WeatherApp";
import TodoApp from "@src/contents/projects/TodoApp";
import ISchedApp from "@src/contents/projects/ISchedApp";

const slugify = (title) =>
  "/projects/" +
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const projectData = [
  {
    title: "I-SCHED",
    description:
      "I-SCHED is a simple scheduling system developed by BSCS 2-5 students of PUP that automates job scheduling using Earliest Deadline First, Merge Sort, and the Fractional Knapsack algorithm. It efficiently organizes tasks based on deadlines, idle time, and importance through a user-friendly interface that allows real-time input, tracking, and adjustment.",
    categories: ["Desktop App", "Productivity"],
    images: [
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
  },
  {
    title: "I-SCHED",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, odio laborum aspernatur quae quo nostrum culpa quasi maxime corrupti dolor. Inventore aliquid delectus alias saepe minus vitae distinctio atque recusandae nulla vel laboriosam iure, quo omnis similique earum sint quos ab fuga quod numquam magnam? Facilis illum eum excepturi fugit?",
    categories: ["Desktop App", "Productivity"],
    images: [
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
  },
   {
    title: "I-SCHED",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, odio laborum aspernatur quae quo nostrum culpa quasi maxime corrupti dolor. Inventore aliquid delectus alias saepe minus vitae distinctio atque recusandae nulla vel laboriosam iure, quo omnis similique earum sint quos ab fuga quod numquam magnam? Facilis illum eum excepturi fugit?",
    categories: ["Desktop App", "Productivity"],
    images: [
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
  },
   {
    title: "I-SCHED",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, odio laborum aspernatur quae quo nostrum culpa quasi maxime corrupti dolor. Inventore aliquid delectus alias saepe minus vitae distinctio atque recusandae nulla vel laboriosam iure, quo omnis similique earum sint quos ab fuga quod numquam magnam? Facilis illum eum excepturi fugit?",
    categories: ["Desktop App", "Productivity"],
    images: [
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
  },
   {
    title: "I-SCHED",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, odio laborum aspernatur quae quo nostrum culpa quasi maxime corrupti dolor. Inventore aliquid delectus alias saepe minus vitae distinctio atque recusandae nulla vel laboriosam iure, quo omnis similique earum sint quos ab fuga quod numquam magnam? Facilis illum eum excepturi fugit?",
    categories: ["Desktop App", "Productivity"],
    images: [
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
  },
   {
    title: "I-SCHED",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, odio laborum aspernatur quae quo nostrum culpa quasi maxime corrupti dolor. Inventore aliquid delectus alias saepe minus vitae distinctio atque recusandae nulla vel laboriosam iure, quo omnis similique earum sint quos ab fuga quod numquam magnam? Facilis illum eum excepturi fugit?",
    categories: ["Desktop App", "Productivity"],
    images: [
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
  },
];

projectData.forEach((project) => {
  project.link = slugify(project.title);
});

export default projectData;
