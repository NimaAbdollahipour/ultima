import { TextInput, TouchableOpacity, View, Text } from "react-native";
import styles from "../styles/styles";
import { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import PriorityPicker from "./PriorityPicker";
import DatePicker from "./DatePicker";
export default function TaskForm(props) {
  const { setTasks } = useContext(TaskContext);
  const [taskBody, setTaskBody] = useState(props.task ? props.task.body : "");
  const [date, setDate] = useState(props.task ? props.task.date : new Date());
  const [priority, setPriority] = useState();
  function add() {
    if (taskBody.length > 1) {
      const currentDate = new Date();
      const newTask = {
        id:
          currentDate.getDate() +
          "" +
          currentDate.getTime() +
          "" +
          Math.floor(Math.random() * 1000),
        body: taskBody,
        date: new Date(date),
        done: false,
        priority: priority,
      };
      setTasks((previuos) => [newTask, ...previuos]);
      setTaskBody("");
      props.close();
    }
  }
  function edit() {
    setTasks((prev) => {
      return prev.map((item) => {
        if (item.id === props.task.id) {
          (item.date = date),
            (item.body = taskBody),
            (item.priority = priority);
        }
        return item;
      });
    });
    props.close();
  }

  return (
    <View
      style={{
        padding: 10,
        elevation: 5,
        backgroundColor: "white",
        borderRadius: 10,
        gap: 10,
      }}
    >
      <TextInput
        multiline
        numberOfLines={3}
        value={taskBody}
        onChangeText={setTaskBody}
        style={styles.input}
        placeholder="task ..."
      />
      <PriorityPicker
        selected={priority}
        onChange={(value) => setPriority(value)}
      />
      <DatePicker current={date} onChange={(value) => setDate(value)} />
      <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
        <TouchableOpacity
          onPress={props.close}
          style={{
            backgroundColor: "gray",
            padding: 8,
            borderRadius: 4,
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            padding: 8,
            borderRadius: 4,
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={props.task ? edit : add}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
