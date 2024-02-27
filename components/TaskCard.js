import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { TaskContext } from "../contexts/TaskContext";
import { getWeekday } from "../utils/dateFuncs";

export default function TaskCard({ task }) {
  const { selectionMode } = useContext(AppContext);
  const { selectedTasks, setTasks, setSelectedTasks } = useContext(TaskContext);

  function isSelected() {
    return selectionMode && selectedTasks.includes(task.id);
  }

  function toggleDone() {
    setTasks((prevTasks) =>
      prevTasks.map((item) => {
        if (item.id === task.id) {
          return { ...item, done: !item.done };
        } else {
          return item;
        }
      })
    );
  }

  function toggleSelect() {
    setSelectedTasks((prev) => {
      if (prev.includes(task.id)) {
        return prev.filter((item) => item !== task.id);
      } else {
        return [task.id, ...prev];
      }
    });
  }

  return (
    <TouchableOpacity
      onPress={selectionMode ? toggleSelect : toggleDone}
      style={
        isSelected() ? styles.selected : task.done ? styles.done : styles.normal
      }
    >
      <MaterialIcons
        name={task.done ? "check-box" : "check-box-outline-blank"}
        color={task.done ? "white" : "black"}
        size={24}
      />
      <View>
        <Text style={{ fontWeight: "bold" }}>{task.body}</Text>
        <Text style={{ color: "gray" }}>
          {console.log(task.date)}
          {task.date.toISOString().split("T")[0] + "\t" + getWeekday(task.date)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  done: {
    backgroundColor: "skyblue",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
    borderStyle: "dashed",
  },
  selected: {
    backgroundColor: "lightgray",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
    borderStyle: "dashed",
  },
  normal: {
    backgroundColor: "white",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
    borderStyle: "dashed",
  },
});
