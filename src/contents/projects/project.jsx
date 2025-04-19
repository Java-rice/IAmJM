import WeatherApp from "@src/contents/projects/WeatherApp";

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
  // ...and so on
];

projectData.forEach((project) => {
  project.link = slugify(project.title);
});

export default projectData;
