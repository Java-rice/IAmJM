// src/components/projects/TodoApp.jsx
import React from "react";

const TodoApp = () => {
  return (
    <div className="space-y-6 text-[#FDFDFD]">
      {/* Title */}
      <h2 className="text-3xl font-bold text-[#F5B301] text-center">To-Do App</h2>

      {/* Introduction */}
      <p className="text-base leading-relaxed text-justify indent-8">
        This To-Do App is a clean, intuitive task manager that helps users stay productive by tracking
        daily tasks, goals, and reminders. Designed with simplicity in mind, the app supports adding,
        editing, and deleting tasks with real-time UI feedback. Whether you're managing work tasks or
        planning a grocery list, the app makes organization seamless and enjoyable.
      </p>

      {/* Cover Image / GIF */}
      <img
        src="/assets/todo_demo.gif"
        alt="To-Do App Demo"
        className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
      />

      {/* Tools Section */}
      <div>
        <h3 className="text-xl font-semibold text-[#F5B301] mb-2">🛠 Tools & Technologies Used</h3>
        <ul className="list-disc list-inside ml-4">
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>LocalStorage for persistence</li>
          <li>Framer Motion for subtle animations</li>
        </ul>
      </div>

      {/* Features Section */}
      <div>
        <h3 className="text-xl font-semibold text-[#F5B301] mb-2">✨ Key Features</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Add, edit, complete, and delete tasks</li>
          <li>Task filtering (All, Active, Completed)</li>
          <li>Auto-save with LocalStorage</li>
          <li>Responsive design for all devices</li>
          <li>Smooth UI animations and hover effects</li>
        </ul>
      </div>

      {/* Collaboration Section */}
      <div>
        <h3 className="text-xl font-semibold text-[#F5B301] mb-2">🤝 Collaboration</h3>
        <p className="text-justify indent-8">
          This app was built as a solo side project to explore advanced state management techniques in React.
          It is currently open for contributions—features like dark mode, calendar integration, and user auth
          are welcome improvements!
        </p>
      </div>

      {/* Video Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-[#F5B301] mb-2">🎬 Walkthrough Demo</h3>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-md shadow-md"
            src="https://www.youtube.com/embed/sample_todo_app_demo"
            title="To-Do App Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Links Section */}
      <div>
        <h3 className="text-xl font-semibold text-[#F5B301] mb-2">🔗 Live Demo & Source Code</h3>
        <ul className="list-disc list-inside ml-4">
          <li>
            🌐 Live App:{" "}
            <a
              href="https://todo-app.example.com"
              className="text-[#F5B301] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://todo-app.example.com
            </a>
          </li>
          <li>
            💻 GitHub Repo:{" "}
            <a
              href="https://github.com/yourusername/todo-app"
              className="text-[#F5B301] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/yourusername/todo-app
            </a>
          </li>
        </ul>
      </div>

      {/* Footer Signature */}
      <p className="text-center text-sm text-gray-400 pt-4">
        Designed for daily clarity by <span className="text-[#F5B301] font-medium">Your Name</span>
      </p>
    </div>
  );
};

export default TodoApp;
