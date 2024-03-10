import { View } from "react-native";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { TaskContext } from "../contexts/TaskContext";
import styles from "../styles/styles";
import { saveTasks } from "../utils/dataService";
import { useRouter } from "expo-router";
import IconButton from "./common/IconButton";

export default function TaskOptions() {
  const { selectedTasks, setSelectedTasks, tasks, setTasks } =
    useContext(TaskContext);
  const { setSelectionMode } = useContext(AppContext);
  const router = useRouter();
  function deleteTask() {
    setTasks((previous) =>
      [...previous].filter((task) => !selectedTasks.includes(task.id))
    );
    saveTasks(tasks);
    setSelectionMode(false);
  }

  function editTask() {
    setSelectionMode(false);
    () => router.push("task/edit/" + selectedTasks);
  }

  function closeSelection() {
    setSelectionMode(false);
    setSelectedTasks([]);
  }

  return (
    <View style={styles.buttonRow}>
      <IconButton
        icon="delete"
        onPress={deleteTask}
        disabled={selectedTasks.length === 0}
      />
      <IconButton
        icon="edit"
        onPress={editTask}
        disabled={selectedTasks.length !== 1}
      />
      <IconButton
        icon="close"
        onPress={closeSelection}
        disabled={selectedTasks.length !== 1}
      />
    </View>
  );
}
