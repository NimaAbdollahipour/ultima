// import React, { useContext } from "react";
// import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";
// import { AppContext } from "../contexts/AppContext";
// import { TaskContext } from "../contexts/TaskContext";
// import { getWeekday } from "../utils/dateFuncs";
// import Priority from "./Priority";
// import { Link } from "expo-router";

// const TaskCard = ({ task }) => {
//   const { selectionMode } = useContext(AppContext);
//   const { selectedTasks, setTasks, setSelectedTasks } = useContext(TaskContext);

//   const isSelected = () => selectionMode && selectedTasks.includes(task.id);

//   const toggleDone = () => {
//     setTasks((prevTasks) =>
//       prevTasks.map((item) =>
//         item.id === task.id ? { ...item, done: !item.done } : item
//       )
//     );
//   };

//   const toggleSelect = () => {
//     setSelectedTasks((prev) =>
//       prev.includes(task.id)
//         ? prev.filter((item) => item !== task.id)
//         : [task.id, ...prev]
//     );
//   };

//   return (
//     <Link href={`/task/${task.id}`}>
//       <View
//         style={
//           isSelected()
//             ? [styles.container, styles.selected]
//             : task.done
//             ? [styles.container, styles.done]
//             : styles.container
//         }
//       >
//         <View style={styles.textContainer}>
//           <TouchableOpacity onPress={toggleDone}>
//             <MaterialIcons
//               name={task.done ? "check-box" : "check-box-outline-blank"}
//               color={task.done ? "navy" : "navy"}
//               size={24}
//             />
//           </TouchableOpacity>
//           <Text style={styles.bodyText}>{task.body}</Text>
//         </View>
//         <View style={styles.infoContainer}>
//           <Text style={styles.dateText}>
//             {task.date.toISOString().split("T")[0]}
//           </Text>
//           <Text style={styles.weekdayText}>{getWeekday(task.date)}</Text>
//           <Priority value={task.priority} />
//         </View>
//       </View>
//     </Link>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 5,
//     backgroundColor: "white",
//     display: "flex",
//     flexDirection: "column",
//     flex: 1,
//     width: "100%",
//   },
//   done: {
//     backgroundColor: "lightgreen",
//   },
//   selected: {
//     backgroundColor: "lightgray",
//   },
//   textContainer: {
//     display: "flex",
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   bodyText: {
//     fontWeight: "bold",
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     flex: 1,
//   },
//   infoContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   dateText: {
//     color: "gray",
//   },
//   weekdayText: {
//     color: "gray",
//   },
// });

// export default TaskCard;

import React, { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AppContext } from "../contexts/AppContext";
import { TaskContext } from "../contexts/TaskContext";
import { getWeekday } from "../utils/dateFuncs";
import Priority from "./Priority";
import { Link } from "expo-router";

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
              color={task.done ? "navy" : "navy"}
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

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: "white",
  },
  done: {
    backgroundColor: "lightblue",
  },
  selected: {
    backgroundColor: "lightgray",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Added alignment for centering items vertically
  },
  bodyText: {
    flex: 1, // Take remaining space in the row
    fontWeight: "bold",
    marginLeft: 10, // Added left margin for spacing
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5, // Added top margin for separation
  },
  dateText: {
    color: "gray",
  },
  weekdayText: {
    color: "gray",
  },
});

export default TaskCard;
