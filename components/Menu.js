import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { TaskContext } from "../contexts/TaskContext";
import { getTomorrow } from "../utils/dateFuncs";
import { clearTasks } from "../utils/dataService";

export default function Menu(props) {
  const { setVisibleDate, showDone, setShowDone } = useContext(AppContext);
  const { setTasks } = useContext(TaskContext);

  function deleteCompleted() {
    setTasks((prev) => [...prev].filter((item) => !item.done));
  }

  return (
    <View style={styles.modalContent}>
      <View>
        <TouchableOpacity
          onPress={() => setShowDone((prev) => !prev)}
          style={styles.nearRow}
        >
          <MaterialIcons
            name={showDone ? "visibility" : "visibility-off"}
            size={24}
            color="navy"
          />
          <Text style={styles.buttonText}>
            {showDone ? "Hide Completed" : "Show Completed"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteCompleted} style={styles.nearRow}>
          <MaterialIcons name="remove-circle-outline" size={24} color="navy" />
          <Text style={styles.buttonText}>Clear Done</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setVisibleDate(new Date())}
          style={styles.nearRow}
        >
          <Text style={styles.buttonText}>Today's Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setVisibleDate(getTomorrow())}
          style={styles.nearRow}
        >
          <Text style={styles.buttonText}>Tomorrow's Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setVisibleDate(null)}
          style={styles.nearRow}
        >
          <Text style={styles.buttonText}>All Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={clearTasks} style={styles.nearRow}>
          <Text style={styles.buttonText}>Cleanup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "absolute",
    top: 0,
    left: 0,
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
    marginTop: 5,
    height: 32,
    gap: 4,
  },
  noFeedback: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
    left: -10,
  },
  buttonText: {
    color: "navy",
  },
});
