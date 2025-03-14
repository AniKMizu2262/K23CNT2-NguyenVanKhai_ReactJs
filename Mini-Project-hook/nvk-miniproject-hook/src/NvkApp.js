import { ThemeProvider } from "./context/NvkThemeContext";
import NvkTodoList from "./components/NvkTodoList";
import NvkThemeToggle from "./components/NvkThemeToggle";


function NvkApp() {
  return (
    <ThemeProvider>
      <div className="container">
        <h1 className="title">Mini Project</h1>
        <h2>Quản Lý Công Việc</h2>
        <NvkThemeToggle />
        <NvkTodoList />
      </div>
    </ThemeProvider>
  );
}

export default NvkApp;