import { createContext, useEffect, useState } from "react";
import { saveTasks } from "../utils/dataService";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        selectedTasks,
        setSelectedTasks,
        loaded,
        setLoaded,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
