import { FlatList, StyleSheet, View } from "react-native";
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

  tasksToShow.sort((a, b) => b.priority - a.priority);

  return (
    <View style={styles.list}>
      <FlatList
        data={tasksToShow}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard task={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 5,
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
});
