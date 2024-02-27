import React, { useContext, useEffect } from "react";
import { View, SafeAreaView } from "react-native";
import { saveTasks, loadTasks } from "../utils/dataService";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import CompactForm from "../components/CompactForm";
import { TaskContext } from "../contexts/TaskContext";

export default function Home() {
  const { tasks, setTasks } = useContext(TaskContext);

  useEffect(() => {
    loadTasks()
      .then((loadedTasks) => setTasks(loadedTasks))
      .catch(console.log("can not load"));
    return () => {
      if (tasks.length > 0) {
        saveTasks(tasks);
      }
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header />
        <TaskList />
        <CompactForm />
      </View>
    </SafeAreaView>
  );
}
