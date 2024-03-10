import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext } from "react";
import { View } from "react-native";
import { TaskContext } from "../../contexts/TaskContext";
import { saveTasks } from "../../utils/dataService";
import LabelValue from "../../components/common/LabelValue";
import TextButton from "../../components/common/TextButton";
import styles from "../../styles/styles";

export default function TaskViewer() {
  const { id } = useLocalSearchParams();
  const { tasks } = useContext(TaskContext);
  const task = tasks.find((item) => item.id === id);
  const priorityValues = ["low", "medium", "high"];
  const { setTasks } = useContext(TaskContext);
  const router = useRouter();
  function deleteTask() {
    setTasks((previous) => [...previous].filter((task) => task.id != id));
    saveTasks(tasks);
    router.back();
  }

  return (
    <View style={styles.details}>
      <LabelValue label="Title" value={task.title} />
      <LabelValue label="Description" value={task.description} />
      <LabelValue label="Priority" value={priorityValues[task.priority - 1]} />
      <LabelValue label="Date" value={task.date.toISOString().split("T")[0]} />
      <TextButton text="delete" onPress={deleteTask} />
      <TextButton text="edit" onPress={() => router.push(`/task/edit/${id}`)} />
    </View>
  );
}
