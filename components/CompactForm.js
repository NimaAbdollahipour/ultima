import { View } from "react-native";
import { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import styles from "../styles/styles";
import { AppContext } from "../contexts/AppContext";
import { saveTasks } from "../utils/dataService";
import Input from "./common/Input";
import SmallIconButton from "./common/SmallIconButton";

export default function CompactForm() {
  const [title, setTitle] = useState("");
  const { setTasks, tasks } = useContext(TaskContext);
  const { showCompact } = useContext(AppContext);
  function addTask() {
    if (title.length > 1) {
      const currentDate = new Date();
      const newTask = {
        id:
          currentDate.getDate() +
          "" +
          currentDate.getTime() +
          "" +
          Math.floor(Math.random() * 1000),
        title: title,
        date: new Date(),
        done: false,
        priority: 2,
      };
      setTasks((previuos) => [newTask, ...previuos]);
      saveTasks(tasks);
      setTitle("");
    }
  }

  return (
    <>
      {showCompact && (
        <View style={styles.compactForm}>
          <Input value={title} onChangeText={(val) => setTitle(val)} />
          <SmallIconButton icon="add-circle-outline" onPress={addTask} />
        </View>
      )}
    </>
  );
}
