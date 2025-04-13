import reactLogo from "@src/assets/LinkedIn.png";
import jsLogo from "@src/assets/LinkedIn.png";
import htmlLogo from "@src/assets/LinkedIn.png";
import cssLogo from "@src/assets/LinkedIn.png";
import tailwindLogo from "@src/assets/LinkedIn.png";
import gitLogo from "@src/assets/LinkedIn.png";
import nodeLogo from "@src/assets/LinkedIn.png";
import figmaLogo from "@src/assets/LinkedIn.png";

const tools = {
  Frontend: [
    {
      title: "React",
      imgSrc: reactLogo,
      color: "#F5E5A8", // soft banana yellow
      text_color: "#1E2329",
      projects: [
        {
          title: "Portfolio Website",
          link: "https://yourportfolio.example.com",
        },
        {
          title: "MERN Blog Platform",
          link: "https://github.com/Java-rice/mern-blog-platform",
        },
      ],
    },
    {
      title: "JavaScript",
      imgSrc: jsLogo,
      color: "#F6D365", // warm yellow gold
      text_color: "#1E2329",
      projects: [
        {
          title: "Task Manager App",
          link: "https://github.com/Java-rice/task-manager",
        },
      ],
    },
    {
      title: "HTML5",
      imgSrc: htmlLogo,
      color: "#FBD490", // muted peachy yellow
      text_color: "#1E2329",
      projects: [],
    },
    {
      title: "CSS3",
      imgSrc: cssLogo,
      color: "#FFE8A3", // pale matte yellow
      text_color: "#1E2329",
      projects: [],
    },
    {
      title: "Tailwind CSS",
      imgSrc: tailwindLogo,
      color: "#FAE29C", // soft gold
      text_color: "#1E2329",
      projects: [
        {
          title: "Responsive Landing Page",
          link: "https://codepen.io/Java-rice/full/example123",
        },
      ],
    },
  ],
  Backend: [
    {
      title: "Node.js",
      imgSrc: nodeLogo,
      color: "#F7D288", // warm light gold
      text_color: "#1E2329",
      projects: [
        {
          title: "MERN Blog Platform",
          link: "https://github.com/Java-rice/mern-blog-platform",
        },
      ],
    },
    {
      title: "Git",
      imgSrc: gitLogo,
      color: "#FCE69D", // pastel yellow
      text_color: "#1E2329",
      projects: [],
    },
  ],
  "Design & Tools": [
    {
      title: "Figma",
      imgSrc: figmaLogo,
      color: "#F5C97A", // matte amber
      text_color: "#1E2329",
      projects: [],
    },
  ],
};

export default tools;
