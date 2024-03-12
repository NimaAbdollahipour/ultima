import React, { useContext, useState, useEffect } from "react";
import { View, Keyboard } from "react-native";
import { TaskContext } from "../contexts/TaskContext";
import PriorityPicker from "./PriorityPicker";
import DatePicker from "./common/DatePicker";
import { useRouter } from "expo-router";
import TextButton from "./common/TextButton";
import Input from "./common/Input";
import styles from "../styles/styles";

export default function TaskForm(props) {
  const { setTasks } = useContext(TaskContext);
  const [title, setTitle] = useState(props.task ? props.task.title : "");
  const [date, setDate] = useState(props.task ? props.task.date : new Date());
  const router = useRouter();
  const [hide, setHide] = useState(false);
  const [priority, setPriority] = useState(
    props.task ? props.task.priority : 2
  );
  const [description, setDescription] = useState(
    props.task ? props.task.description : ""
  );

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setHide(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setHide(false)
    );

    // Cleanup function to remove listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
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
    <View style={styles.formContainer}>
      <View style={styles.formItem}>
        <Input
          multiline
          numberOfLines={1}
          value={title}
          onChangeText={setTitle}
          placeholder="task ..."
        />
      </View>

      <View style={styles.formItem}>
        <PriorityPicker
          selected={priority}
          onChange={(value) => setPriority(value)}
        />
      </View>
      {!hide && (
        <View style={styles.formItemDouble}>
          <DatePicker current={date} onChange={(value) => setDate(value)} />
        </View>
      )}

      <View style={styles.formItemExpand}>
        <Input
          multiline
          numberOfLines={3}
          value={description}
          onChangeText={setDescription}
          placeholder="description ..."
          onFocus={() => setHide(true)}
        />
      </View>
      {!hide && (
        <View style={styles.formItem}>
          <TextButton
            onPress={props.task ? edit : add}
            text={props.task ? "save changes" : "add"}
          />
        </View>
      )}
    </View>
  );
}
