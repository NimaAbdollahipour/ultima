import React, { useContext, useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { TaskContext } from "../contexts/TaskContext";
import PriorityPicker from "./PriorityPicker";
import DatePicker from "./DatePicker";
import { useRouter } from "expo-router";

const styles = {
  taskFormContainer: {
    padding: 10,
    gap: 10,
    width: "100%",
  },
  input: {
    padding: 5,
    borderColor: "lightgray",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    marginVertical: 5,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  cancelButton: {
    backgroundColor: "lightgray",
    padding: 8,
    borderRadius: 4,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "navy",
    padding: 8,
    borderRadius: 4,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function TaskForm(props) {
  const { setTasks } = useContext(TaskContext);
  const [title, setTitle] = useState(props.task ? props.task.title : "");
  const [date, setDate] = useState(props.task ? props.task.date : new Date());
  const router = useRouter();
  const [priority, setPriority] = useState(
    props.task ? props.task.priority : 2
  );
  const [description, setDescription] = useState(
    props.task ? props.task.description : ""
  );
  function add() {
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
        date: new Date(date),
        done: false,
        priority: priority,
        description: description,
      };
      setTasks((previuos) => [newTask, ...previuos]);
      setTitle("");
      router.back();
    }
  }

  function edit() {
    setTasks((prev) => {
      return prev.map((item) => {
        if (item.id === props.task.id) {
          item.date = date;
          item.title = title;
          item.priority = priority;
          item.description = description;
        }
        return item;
      });
    });
    router.back();
  }

  return (
    <View style={styles.taskFormContainer}>
      <TextInput
        multiline
        numberOfLines={2}
        value={title}
        onChangeText={setTitle}
        style={styles.input}
        placeholder="task ..."
      />
      <TextInput
        multiline
        numberOfLines={3}
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        placeholder="description ..."
      />
      <PriorityPicker
        selected={priority}
        onChange={(value) => setPriority(value)}
      />
      <DatePicker current={date} onChange={(value) => setDate(value)} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={props.task ? edit : add}
        >
          <Text style={{ color: "white" }}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
