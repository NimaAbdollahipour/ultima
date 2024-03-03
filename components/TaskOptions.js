import { TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { TaskContext } from "../contexts/TaskContext";
import Modal from "react-native-modal";
import styles from "../styles/styles";
import TaskForm from "./TaskForm";
import { saveTasks } from "../utils/dataService";

export default function TaskOptions() {
  const { selectedTasks, setSelectedTasks, tasks, setTasks } =
    useContext(TaskContext);
  const { setSelectionMode, setShowCompact } = useContext(AppContext);
  const [showForm, setShowForm] = useState(false);

  function deleteTask() {
    setTasks((previous) =>
      [...previous].filter((task) => !selectedTasks.includes(task.id))
    );
    saveTasks(tasks);
  }

  function editTask() {
    setShowForm(true);
    saveTasks(tasks);
  }

  function closeSelection() {
    setSelectionMode(false);
    setSelectedTasks([]);
  }

  return (
    <View style={styles.rowEnd}>
      <TouchableOpacity
        disabled={selectedTasks.length === 0}
        onPress={deleteTask}
        style={{ padding: 8 }}
      >
        <MaterialIcons
          name="delete"
          size={24}
          color={selectedTasks.length === 0 ? "gray" : "black"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={selectedTasks.length !== 1}
        onPress={editTask}
        style={{ padding: 8 }}
      >
        <MaterialIcons
          name="edit"
          size={24}
          color={selectedTasks.length === 1 ? "black" : "gray"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={closeSelection} style={{ padding: 8 }}>
        <MaterialIcons name="close" size={24} color="black" />
      </TouchableOpacity>
      <Modal
        title="Edit Task"
        onCancel={null}
        onOK={null}
        visible={showForm}
        onRequestClose={() => {
          setShowForm(false);
          setShowCompact(true);
        }}
      >
        <TaskForm
          close={() => {
            setShowForm(false);
            setShowCompact(true);
          }}
          task={tasks.find((item) => item.id === selectedTasks[0])}
        />
      </Modal>
    </View>
  );
}
