import { TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import styles from "../styles/styles";
import { AppContext } from "../contexts/AppContext";
import { saveTasks } from "../utils/dataService";

export default function CompactForm() {
  const [taskBody, setTaskBody] = useState("");
  const { setTasks, tasks } = useContext(TaskContext);
  const { showCompact } = useContext(AppContext);
  function addTask() {
    if (taskBody.length > 1) {
      const currentDate = new Date();
      const newTask = {
        id:
          currentDate.getDate() +
          "" +
          currentDate.getTime() +
          "" +
          Math.floor(Math.random() * 1000),
        body: taskBody,
        date: new Date(),
        done: false,
        priority: 2,
      };
      setTasks((previuos) => [newTask, ...previuos]);
      setTaskBody("");
      saveTasks(tasks);
    }
  }

  return (
    <>
      {showCompact && (
        <View
          style={[styles.row, { borderTopWidth: 1, borderColor: "#dddddd" }]}
        >
          <TextInput
            value={taskBody}
            onChangeText={setTaskBody}
            style={styles.inputOne}
          />
          <TouchableOpacity onPress={addTask} style={{ padding: 8 }}>
            <MaterialIcons name="add-circle-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
