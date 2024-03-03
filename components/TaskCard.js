// import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";
// import { useContext } from "react";
// import { AppContext } from "../contexts/AppContext";
// import { TaskContext } from "../contexts/TaskContext";
// import { getWeekday } from "../utils/dateFuncs";
// import Priority from "./Priority";

// export default function TaskCard({ task }) {
//   const { selectionMode } = useContext(AppContext);
//   const { selectedTasks, setTasks, setSelectedTasks } = useContext(TaskContext);

//   function isSelected() {
//     return selectionMode && selectedTasks.includes(task.id);
//   }

//   function toggleDone() {
//     setTasks((prevTasks) =>
//       prevTasks.map((item) => {
//         if (item.id === task.id) {
//           return { ...item, done: !item.done };
//         } else {
//           return item;
//         }
//       })
//     );
//   }

//   function toggleSelect() {
//     setSelectedTasks((prev) => {
//       if (prev.includes(task.id)) {
//         return prev.filter((item) => item !== task.id);
//       } else {
//         return [task.id, ...prev];
//       }
//     });
//   }

//   return (
//     <TouchableOpacity
//       onPress={selectionMode ? toggleSelect : toggleDone}
//       style={
//         isSelected() ? styles.selected : task.done ? styles.done : styles.normal
//       }
//     >
//       <MaterialIcons
//         name={task.done ? "check-box" : "check-box-outline-blank"}
//         color={task.done ? "white" : "black"}
//         size={24}
//       />
//       <View style={{ display: "flex", flexWrap: "wrap" }}>
//         <Text
//           style={{
//             fontWeight: "bold",
//             backgroundColor: "red",
//             marginBottom: 10,
//             paddingHorizontal: 10,
//             display: "flex",
//             flexWrap: "wrap",
//           }}
//         >
//           {task.body}
//         </Text>
//         <View
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "flex-start",
//             gap: 30,
//           }}
//         >
//           <Text style={{ color: "gray" }}>
//             {task.date.toISOString().split("T")[0]}
//           </Text>
//           <Text style={{ color: "gray" }}>{getWeekday(task.date)}</Text>
//         </View>
//         <Priority value={task.priority} />
//       </View>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   done: {
//     backgroundColor: "skyblue",
//     padding: 10,
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "flex-start",
//     gap: 10,
//     borderRadius: 5,
//     marginBottom: 5,
//   },
//   selected: {
//     backgroundColor: "lightgray",
//     padding: 10,
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "flex-start",
//     gap: 10,
//     borderRadius: 5,
//     marginBottom: 5,
//   },
//   normal: {
//     backgroundColor: "white",
//     padding: 10,
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "flex-start",
//     gap: 10,
//     borderRadius: 5,
//     marginBottom: 5,
//   },
// });

import React, { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AppContext } from "../contexts/AppContext";
import { TaskContext } from "../contexts/TaskContext";
import { getWeekday } from "../utils/dateFuncs";
import Priority from "./Priority";

const TaskCard = ({ task }) => {
  const { selectionMode } = useContext(AppContext);
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
    <TouchableOpacity
      onPress={selectionMode ? toggleSelect : toggleDone}
      style={[
        styles.container,
        isSelected() ? styles.selected : task.done && styles.done,
      ]}
    >
      <MaterialIcons
        name={task.done ? "check-box" : "check-box-outline-blank"}
        color={task.done ? "white" : "black"}
        size={24}
      />
      <View style={styles.textContainer}>
        <Text style={styles.bodyText}>{task.body}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.dateText}>
            {task.date.toISOString().split("T")[0]}
          </Text>
          <Text style={styles.weekdayText}>{getWeekday(task.date)}</Text>
          <Priority value={task.priority} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: "white",
  },
  done: {
    backgroundColor: "skyblue",
  },
  selected: {
    backgroundColor: "lightgray",
  },
  textContainer: {
    flex: 1,
  },
  bodyText: {
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateText: {
    color: "gray",
  },
  weekdayText: {
    color: "gray",
  },
});

export default TaskCard;
