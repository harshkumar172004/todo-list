import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold
    transition-all duration-300 shadow-lg cursor-pointer

    bg-gradient-to-r from-indigo-500 to-cyan-500 text-white
    hover:scale-105 hover:shadow-xl active:scale-95"
      onClick={() => setDarkMode((prev) => !prev)}
    >
      {darkMode ? "☀️Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;