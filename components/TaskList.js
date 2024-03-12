import { FlatList, View } from "react-native";
import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { AppContext } from "../contexts/AppContext";
import styles from "../styles/styles";

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

  function compareTasks(task1, task2) {
    if (task1.date.getTime() !== task2.date.getTime()) {
      return task1.date.getTime() - task2.date.getTime();
    } else {
      return task2.priority - task1.priority;
    }
  }
  tasksToShow.sort(compareTasks);

  return (
    <View style={styles.taskList}>
      <FlatList
        data={tasksToShow}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard task={item} />}
      />
    </View>
  );
}
