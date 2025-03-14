import { useTheme } from "../context/NvkThemeContext";

export default function NvkThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Chuyển sang {theme === "light" ? "Tối" : "Sáng"}</button>;
}