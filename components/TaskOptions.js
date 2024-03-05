import { TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { TaskContext } from "../contexts/TaskContext";
import styles from "../styles/styles";
import { saveTasks } from "../utils/dataService";
import { useRouter } from "expo-router";

export default function TaskOptions() {
  const { selectedTasks, setSelectedTasks, tasks, setTasks } =
    useContext(TaskContext);
  const { setSelectionMode, setShowCompact } = useContext(AppContext);
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();
  function deleteTask() {
    setTasks((previous) =>
      [...previous].filter((task) => !selectedTasks.includes(task.id))
    );
    saveTasks(tasks);
    setSelectionMode(false);
  }

  function editTask() {
    setShowForm(true);
    saveTasks(tasks);
    setSelectionMode(false);
  }

  function closeSelection() {
    setSelectionMode(false);
    setSelectedTasks([]);
  }

  return (
    <View style={styles.rowEnd}>
      <TouchableOpacity
        disabled={selectedTasks.length === 0}
        onPress={deleteTask}
        style={{ padding: 8 }}
      >
        <MaterialIcons
          name="delete"
          size={24}
          color={selectedTasks.length === 0 ? "gray" : "navy"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={selectedTasks.length !== 1}
        onPress={() => router.push("task/edit/" + selectedTasks)}
        style={{ padding: 8 }}
      >
        <MaterialIcons
          name="edit"
          size={24}
          color={selectedTasks.length === 1 ? "navy" : "gray"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={closeSelection} style={{ padding: 8 }}>
        <MaterialIcons name="close" size={24} color="navy" />
      </TouchableOpacity>
    </View>
  );
}
