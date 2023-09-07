import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

export default function ThemeIcon() {
  useEffect(() => {
    const handleToggleClick = () => {
      const element = document.documentElement;
      element.classList.toggle("dark");
    };

    document
      .getElementById("themeToggle")
      ?.addEventListener("click", handleToggleClick);
  }, []);

  return (
    <button id="themeToggle" className="ml-4">
      <Sun id="sun" className="dark:hidden" />
      <Moon id="moon" className="hidden dark:block" />
    </button>
  );
}
