import { FlatList } from "react-native";
import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { AppContext } from "../contexts/AppContext";

export default function TaskList() {
  const { tasks } = useContext(TaskContext);
  const { showDone, visibleDate } = useContext(AppContext);

  let tasksToShow = tasks.filter((item) => {
    return showDone || !item.done;
  });

  if (visibleDate) {
    tasksToShow = tasksToShow.filter((item) => {
      const itemDate = item.date;
      return (
        itemDate.getFullYear() === visibleDate.getFullYear() &&
        itemDate.getMonth() === visibleDate.getMonth() &&
        itemDate.getDate() === visibleDate.getDate()
      );
    });
  }

  return (
    <FlatList
      data={tasksToShow}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TaskCard task={item} />}
    />
  );
}
