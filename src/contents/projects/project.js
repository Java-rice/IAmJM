const slugify = (title) =>
  "/projects/" +
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, "");    // Trim leading/trailing hyphens

const projectData = [
  {
    title: "To Do List Application",
    description: "A simple To-Do List app with CRUD functionality and local storage integration.",
    categories: ["Web App", "Productivity"],
    images: ["path_to_image1a.jpg", "path_to_image1b.jpg"],
    toolsUsed: ["HTML", "CSS", "JavaScript"],
    gif: "path_to_todo_demo.gif",
    video: null,
  },
  {
    title: "Weather App",
    description: "A responsive weather forecasting app that displays real-time temperature, humidity, and location-based data.",
    categories: ["Web App", "API Integration"],
    images: ["path_to_weather1.jpg", "path_to_weather2.jpg"],
    toolsUsed: ["React", "OpenWeatherMap API", "Tailwind CSS"],
    gif: null,
    video: "https://www.youtube.com/embed/sample_weather_app_demo",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio site to showcase projects, skills, and contact info.",
    categories: ["Web App", "Design"],
    images: ["path_to_portfolio1.jpg", "path_to_portfolio2.jpg", "path_to_portfolio3.jpg"],
    toolsUsed: ["React", "Tailwind CSS", "Framer Motion"],
    gif: "path_to_portfolio_animation.gif",
    video: null,
  },
  {
    title: "E-Commerce Store",
    description: "A full-stack e-commerce store with product listings, cart functionality, and Stripe integration.",
    categories: ["Web App", "Software"],
    images: ["path_to_ecommerce1.jpg", "path_to_ecommerce2.jpg"],
    toolsUsed: ["React", "Node.js", "MongoDB", "Stripe API"],
    gif: null,
    video: "https://www.youtube.com/embed/sample_ecommerce_demo",
  },
  {
    title: "Social Media Dashboard",
    description: "A dark-mode dashboard to monitor and schedule posts across multiple social media platforms.",
    categories: ["Dashboard", "Design", "Analytics"],
    images: ["path_to_dashboard1.jpg", "path_to_dashboard2.jpg"],
    toolsUsed: ["Vue.js", "Chart.js", "Tailwind CSS"],
    gif: "path_to_dashboard_animation.gif",
    video: null,
  },
  {
    title: "AI Chatbot Assistant",
    description: "An intelligent chatbot powered by GPT-3 for answering FAQs and assisting customers.",
    categories: ["AI", "Chatbot", "Web App"],
    images: ["path_to_ai1.jpg", "path_to_ai2.jpg"],
    toolsUsed: ["React", "OpenAI API", "Node.js"],
    gif: null,
    video: "https://www.youtube.com/embed/sample_ai_chatbot_demo",
  },
];

// Add dynamic link to each project
projectData.forEach((project) => {
  project.link = slugify(project.title);
});

export default projectData;
