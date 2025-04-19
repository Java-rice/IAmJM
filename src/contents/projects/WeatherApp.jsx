import React from "react";

const WeatherApp = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h2 className="text-2xl font-bold text-[#F5B301]">Weather App</h2>

      {/* Description */}
      <p className="text-[#FDFDFD] text-base leading-relaxed text-justify">
        The Weather App is a responsive web application that displays real-time weather data,
        including temperature, humidity, and forecasts based on the user's current location or
        searched city. It integrates seamlessly with the OpenWeatherMap API and features clean,
        modern UI components styled with Tailwind CSS.
      </p>

      {/* GIF or Main Image */}
      <img
        src="/assets/weather_demo.gif"
        alt="Weather App Demo"
        className="rounded-lg shadow-lg w-full max-w-3xl mx-auto"
      />

      {/* Tools */}
      <div>
        <h3 className="text-lg font-semibold text-[#F5B301]">Tools & Technologies Used:</h3>
        <ul className="list-disc list-inside text-[#FDFDFD]">
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>OpenWeatherMap API</li>
          <li>Geolocation API</li>
        </ul>
      </div>

      {/* Features */}
      <div>
        <h3 className="text-lg font-semibold text-[#F5B301]">Key Features:</h3>
        <ul className="list-disc list-inside text-[#FDFDFD]">
          <li>Real-time weather data with city search support</li>
          <li>Auto-fetch location-based weather on load</li>
          <li>7-day forecast using extended API</li>
          <li>Responsive and mobile-first design</li>
          <li>Animated weather icons</li>
        </ul>
      </div>

      {/* Collaboration */}
      <div>
        <h3 className="text-lg font-semibold text-[#F5B301]">Collaboration:</h3>
        <p className="text-[#FDFDFD]">
          Built independently as a personal project, but open to contributions for additional
          features like dark mode, internationalization, and offline caching.
        </p>
      </div>

      {/* Demo & Code Links */}
      <div>
        <h3 className="text-lg font-semibold text-[#F5B301]">Live Demo & Source Code:</h3>
        <ul className="list-disc list-inside text-[#FDFDFD]">
          <li>
            🌐 Live App:{" "}
            <a
              href="https://weather-app.example.com"
              className="text-[#F5B301] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://weather-app.example.com
            </a>
          </li>
          <li>
            💻 GitHub Repo:{" "}
            <a
              href="https://github.com/yourusername/weather-app"
              className="text-[#F5B301] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/yourusername/weather-app
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherApp;
