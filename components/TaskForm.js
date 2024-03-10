import React, { useContext, useState } from "react";
import { View } from "react-native";
import { TaskContext } from "../contexts/TaskContext";
import PriorityPicker from "./PriorityPicker";
import DatePicker from "./common/DatePicker";
import { useRouter } from "expo-router";
import TextButton from "./common/TextButton";
import Input from "./common/Input";
import styles from "../styles/styles";
import { ThemeContext } from "../contexts/ThemeContext";

export default function TaskForm(props) {
  const { setTasks } = useContext(TaskContext);
  const [title, setTitle] = useState(props.task ? props.task.title : "");
  const [date, setDate] = useState(props.task ? props.task.date : new Date());
  const router = useRouter();
  const { darkMode } = useContext(ThemeContext);
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
    <View style={darkMode ? styles.formContainerDark : styles.formContainer}>
      <View style={styles.formItem}>
        <Input
          multiline
          numberOfLines={1}
          value={title}
          onChangeText={setTitle}
          placeholder="task ..."
        />
      </View>
      <View style={styles.formItemDouble}>
        <Input
          multiline
          numberOfLines={3}
          value={description}
          onChangeText={setDescription}
          placeholder="description ..."
        />
      </View>
      <View style={styles.formItem}>
        <PriorityPicker
          selected={priority}
          onChange={(value) => setPriority(value)}
        />
      </View>
      <View style={styles.formItemDouble}>
        <DatePicker current={date} onChange={(value) => setDate(value)} />
      </View>
      <View style={styles.formItemDouble}>
        <TextButton
          onPress={props.task ? edit : add}
          text={props.task ? "save changes" : "add"}
        />
      </View>
    </View>
  );
}
