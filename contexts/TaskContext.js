import { createContext, useEffect, useState } from "react";
import { saveTasks } from "../utils/dataService";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);

  useEffect(() => {
    if (tasks.length > 0) {
      saveTasks(tasks);
    }
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, selectedTasks, setSelectedTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
}
