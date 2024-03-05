import { Link, router, useLocalSearchParams, useRouter } from "expo-router";
import { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TaskContext } from "../../contexts/TaskContext";
import { saveTasks } from "../../utils/dataService";
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
    <View style={styles.container}>
      <Text style={styles.bold}>Title</Text>
      <Text style={styles.text}>{task.title}</Text>
      <Text style={styles.bold}>Description</Text>
      <Text style={styles.text}>{task.description}</Text>
      <Text style={styles.bold}>Priority</Text>
      <Text style={styles.text}>{priorityValues[task.priority - 1]}</Text>
      <Text style={styles.bold}>Date</Text>
      <Text style={styles.text}>{task.date.toISOString().split("T")[0]}</Text>
      <TouchableOpacity style={styles.button} onPress={deleteTask}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push(`/task/edit/${id}`)}
      >
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: "flex",
    gap: 10,
  },
  text: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  bold: {
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "navy",
    padding: 8,
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
