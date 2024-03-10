import React, { useContext, useEffect } from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { saveTasks, loadTasks } from "../utils/dataService";
import TaskList from "../components/TaskList";
import CompactForm from "../components/CompactForm";
import { TaskContext } from "../contexts/TaskContext";

export default function Home() {
  const { tasks, setTasks, loaded, setLoaded } = useContext(TaskContext);
  useEffect(() => {
    loadTasks()
      .then((loadedTasks) => {
        setTasks(loadedTasks);
        setLoaded(true);
      })
      .catch(console.log("can not load"));
    return () => {
      if (loaded) {
        saveTasks(tasks).then(console.log("saved"));
      }
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <TaskList />
        <CompactForm />
      </View>
    </SafeAreaView>
  );
}
