import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { TaskContext } from "../contexts/TaskContext";
import { getTomorrow } from "../utils/dateFuncs";

export default function Menu(props) {
  const { setVisibleDate, showDone, setShowDone } = useContext(AppContext);
  const { setTasks } = useContext(TaskContext);

  function deleteCompleted() {
    setTasks((prev) => [...prev].filter((item) => !item.done));
  }

  return (
    <View style={styles.modalContent}>
      <TouchableOpacity
        onPress={() => props.close()}
        style={styles.closeButton}
      >
        <MaterialIcons name="close" size={24} color="black" />
      </TouchableOpacity>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => setShowDone((prev) => !prev)}
          style={styles.nearRow}
        >
          <MaterialIcons
            name={showDone ? "visibility" : "visibility-off"}
            size={24}
            color="black"
          />
          <Text>{showDone ? "Hide Completed" : "Show Completed"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteCompleted} style={styles.nearRow}>
          <MaterialIcons name="remove-circle-outline" size={24} color="black" />
          <Text>Clear Done</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setVisibleDate(new Date())}
          style={styles.nearRow}
        >
          <Text>Today's Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setVisibleDate(getTomorrow())}
          style={styles.nearRow}
        >
          <Text>Tomorrow's Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setVisibleDate(null)}
          style={styles.nearRow}
        >
          <Text>All Tasks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "absolute",
    top: -20,
    left: -10,
    width: "50%",
    elevation: 5,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  nearRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    height: 32,
    gap: 4,
  },
});
