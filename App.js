import Home from "./screens/Home";
import AppProvider from "./contexts/AppContext";
import TaskProvider from "./contexts/TaskContext";

export default function App() {
  return (
    <TaskProvider>
      <AppProvider>
        <Home />
      </AppProvider>
    </TaskProvider>
  );
}
