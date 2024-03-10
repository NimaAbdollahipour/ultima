import React, { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AppContext } from "../contexts/AppContext";
import { TaskContext } from "../contexts/TaskContext";
import { getWeekday } from "../utils/dateFuncs";
import Priority from "./common/Priority";
import { Link } from "expo-router";
import appColors from "../styles/colors";
import styles from "../styles/styles";
const TaskCard = ({ task }) => {
  const { selectionMode, setSelectionMode } = useContext(AppContext);
  const { selectedTasks, setTasks, setSelectedTasks } = useContext(TaskContext);

  const isSelected = () => selectionMode && selectedTasks.includes(task.id);

  const toggleDone = () => {
    setTasks((prevTasks) =>
      prevTasks.map((item) =>
        item.id === task.id ? { ...item, done: !item.done } : item
      )
    );
  };

  const toggleSelect = () => {
    setSelectedTasks((prev) =>
      prev.includes(task.id)
        ? prev.filter((item) => item !== task.id)
        : [task.id, ...prev]
    );
  };

  return (
    <View
      style={[
        styles.container,
        isSelected() ? styles.selected : task.done && styles.done,
        new Date().getTime() > task.date.getTime() &&
          !task.done &&
          styles.warning,
      ]}
    >
      <TouchableOpacity
        onLongPress={() => {
          if (!selectionMode) {
            setSelectedTasks([]);
            setSelectionMode(true);
            setSelectedTasks((prev) => [task.id, ...prev]);
          }
        }}
        onPressIn={() => {
          if (selectionMode) {
            if (selectedTasks.includes(task.id)) {
              setSelectedTasks((prev) => {
                const newTasks = [...prev].filter((item) => item !== task.id);
                if (newTasks.length === 0) {
                  setSelectionMode(false);
                }
                return newTasks;
              });
            } else {
              setSelectedTasks((prev) => [task.id, ...prev]);
            }
          }
        }}
      >
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={toggleDone}>
            <MaterialIcons
              name={task.done ? "check-box" : "check-box-outline-blank"}
              color={task.done ? "#007AFF" : "#007AFF"}
              size={24}
            />
          </TouchableOpacity>
          <Link
            href={`/task/${task.id}`}
            style={{ flex: 1, paddingHorizontal: 10 }}
          >
            <Text style={styles.bodyText}>{task.title}</Text>
          </Link>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.dateText}>
            {task.date.toISOString().split("T")[0]}
          </Text>
          <Text style={styles.weekdayText}>{getWeekday(task.date)}</Text>
          <Priority value={task.priority} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;
