const logoFixes = {
  VSCode: "visualstudiocode",
  Java: "openjdk",
  Windows: "windows",
};

const generateShieldsBadge = (title, color) => {
  const formattedTitle = encodeURIComponent(title.replace(/\s+/g, ""));
  const cleanColor = color?.replace("#", "") || "F5B301";
  const logo = logoFixes[title] || formattedTitle.toLowerCase();

  return `https://img.shields.io/badge/${formattedTitle}-${cleanColor}?style=for-the-badge&labelColor=1E2329&logo=${logo}&logoColor=${cleanColor}`;
};

const tools = {
  Frontend: [
    {
      title: "React",
      imgSrc: generateShieldsBadge("React", "#F5E5A8"),
      color: "#F5E5A8",
      text_color: "#1E2329",
      projects: [
        { title: "Portfolio Website", link: "https://yourportfolio.example.com" },
        { title: "MERN Blog Platform", link: "https://github.com/Java-rice/mern-blog-platform" },
      ],
    },
    {
      title: "JavaScript",
      imgSrc: generateShieldsBadge("JavaScript", "#F6D365"),
      color: "#F6D365",
      text_color: "#1E2329",
      projects: [
        { title: "Task Manager App", link: "https://github.com/Java-rice/task-manager" },
      ],
    },
    {
      title: "HTML5",
      imgSrc: generateShieldsBadge("HTML5", "#FBD490"),
      color: "#FBD490",
      text_color: "#1E2329",
      projects: [],
    },
    {
      title: "CSS3",
      imgSrc: generateShieldsBadge("CSS3", "#FFE8A3"),
      color: "#FFE8A3",
      text_color: "#1E2329",
      projects: [],
    },
    {
      title: "Tailwind CSS",
      imgSrc: generateShieldsBadge("TailwindCSS", "#FAE29C"),
      color: "#FAE29C",
      text_color: "#1E2329",
      projects: [
        { title: "Responsive Landing Page", link: "https://codepen.io/Java-rice/full/example123" },
      ],
    },
    {
      title: "Bootstrap",
      imgSrc: generateShieldsBadge("Bootstrap", "#F7DDA5"),
      color: "#F7DDA5",
      text_color: "#1E2329",
      projects: [],
    },
    {
      title: "TypeScript",
      imgSrc: generateShieldsBadge("TypeScript", "#F9EAA0"),
      color: "#F9EAA0",
      text_color: "#1E2329",
      projects: [],
    },
  ],
  Backend: [
    {
      title: "Node.js",
      imgSrc: generateShieldsBadge("Node.js", "#F7D288"),
      color: "#F7D288",
      text_color: "#1E2329",
      projects: [
        { title: "MERN Blog Platform", link: "https://github.com/Java-rice/mern-blog-platform" },
      ],
    },
    {
      title: "Git",
      imgSrc: generateShieldsBadge("Git", "#FCE69D"),
      color: "#FCE69D",
      text_color: "#1E2329",
      projects: [],
    },
    {
      title: "Django",
      imgSrc: generateShieldsBadge("Django", "#F8DFA6"),
      color: "#F8DFA6",
      text_color: "#1E2329",
      projects: [],
    },
    {
      title: "SQLite",
      imgSrc: generateShieldsBadge("SQLite", "#FBE59E"),
      color: "#FBE59E",
      text_color: "#1E2329",
      projects: [],
    },
  ],
  "Design & Tools": [
    {
      title: "Figma",
      imgSrc: generateShieldsBadge("Figma", "#F5C97A"),
      color: "#F5C97A",
      text_color: "#1E2329",
      projects: [],
    },
    {
      title: "Postman",
      imgSrc: generateShieldsBadge("Postman", "#F6BD80"),
      color: "#F6BD80",
      text_color: "#1E2329",
      projects: [],
    },
    {
      title: "WordPress",
      imgSrc: generateShieldsBadge("WordPress", "#FFE58F"),
      color: "#FFE58F",
      text_color: "#1E2329",
      projects: [],
    },
    {
      title: "VSCode",
      imgSrc: generateShieldsBadge("VSCode", "#FFEBB4"),
      color: "#FFEBB4",
      text_color: "#1E2329",
      projects: [],
    },
    {
      title: "Android Studio",
      imgSrc: generateShieldsBadge("AndroidStudio", "#F4DC99"),
      color: "#F4DC99",
      text_color: "#1E2329",
      projects: [],
    },
    {
      title: "Windows",
      imgSrc: generateShieldsBadge("Windows", "#F8F3C1"),
      color: "#F8F3C1",
      text_color: "#1E2329",
      projects: [],
    },
  ],
  Languages: [
    {
      title: "Python",
      imgSrc: generateShieldsBadge("Python", "#FAD473"),
      color: "#FAD473",
      text_color: "#1E2329",
      projects: [],
    },
    {
      title: "Java",
      imgSrc: generateShieldsBadge("Java", "#F7CA77"),
      color: "#F7CA77",
      text_color: "#1E2329",
      projects: [],
    },
    {
      title: "C",
      imgSrc: generateShieldsBadge("C", "#FFED9E"),
      color: "#FFED9E",
      text_color: "#1E2329",
      projects: [],
    },
    {
      title: "C++",
      imgSrc: generateShieldsBadge("C++", "#FFE899"),
      color: "#FFE899",
      text_color: "#1E2329",
      projects: [],
    },
    {
      title: "Kotlin",
      imgSrc: generateShieldsBadge("Kotlin", "#F9DC95"),
      color: "#F9DC95",
      text_color: "#1E2329",
      projects: [],
    },
  ],
};

export default tools;
