import { useEffect, useState } from "react";

export function useDarkLightMode() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  useEffect(() => {
    // Aplicar la clase correspondiente al documento
    function applyBackground(theme) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
      // "url('https://www.toptal.com/designers/subtlepatterns/uploads/denim.png')"
      theme === "dark"
        ? document.documentElement.style.setProperty("--background", "#06163d")
        : document.documentElement.style.setProperty("--background", "#d5d9dd");
    }

    if (theme === "dark") {
      applyBackground("dark");
    } else {
      applyBackground("light");
    }

    // Guardar el tema en localStorage
    window.localStorage.setItem("theme", theme);
  }, [theme, setTheme]);

  return [theme, setTheme];
}
