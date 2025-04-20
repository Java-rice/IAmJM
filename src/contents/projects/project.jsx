import WeatherApp from "@src/contents/projects/WeatherApp";
import TodoApp from "@src/contents/projects/TodoApp";
const slugify = (title) =>
  "/projects/" +
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const projectData = [
  // {
  //   title: "Weather App",
  //   description: "A responsive weather forecasting app that displays real-time temperature, humidity, and location-based data.",
  //   categories: ["Web App", "API Integration"],
  //   images: ["path_to_weather1.jpg", "path_to_weather2.jpg"],
  //   toolsUsed: ["React", "OpenWeatherMap API", "Tailwind CSS"],
  //   gif: null,
  //   video: "https://www.youtube.com/embed/sample_weather_app_demo",
  //   component: <WeatherApp />
  // },
  // {
  //   title: "To-Do App",
  //   description: "An intuitive task manager with live editing, animations, and persistent storage.",
  //   categories: ["Web App", "Productivity"],
  //   images: ["path_to_todo1.jpg", "path_to_todo2.jpg"],
  //   toolsUsed: ["React", "Tailwind CSS", "Framer Motion", "LocalStorage"],
  //   gif: "/assets/todo_demo.gif",
  //   video: "https://www.youtube.com/embed/sample_todo_app_demo",
  //   component: <TodoApp />
  // },
  // {
  //   title: "To-Do App",
  //   description: "An intuitive task manager with live editing, animations, and persistent storage.",
  //   categories: ["Web App", "Productivity"],
  //   images: ["path_to_todo1.jpg", "path_to_todo2.jpg"],
  //   toolsUsed: ["React", "Tailwind CSS", "Framer Motion", "LocalStorage"],
  //   gif: "/assets/todo_demo.gif",
  //   video: "https://www.youtube.com/embed/sample_todo_app_demo",
  //   component: <TodoApp />
  // },
  // {
  //   title: "To-Do App",
  //   description: "An intuitive task manager with live editing, animations, and persistent storage.",
  //   categories: ["Web App", "Productivity"],
  //   images: ["path_to_todo1.jpg", "path_to_todo2.jpg"],
  //   toolsUsed: ["React", "Tailwind CSS", "Framer Motion", "LocalStorage"],
  //   gif: "/assets/todo_demo.gif",
  //   video: "https://www.youtube.com/embed/sample_todo_app_demo",
  //   component: <TodoApp />
  // }
];

projectData.forEach((project) => {
  project.link = slugify(project.title);
});

export default projectData;
