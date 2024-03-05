import { Stack } from "expo-router";
import AppProvider from "../contexts/AppContext";
import TaskProvider from "../contexts/TaskContext";
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <TaskProvider>
      <AppProvider>
        <StatusBar backgroundColor="white" />
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerTitle: "Tasks",
              headerBackTitle: "Tasks",
              header: () => <Header />,
            }}
          />
          <Stack.Screen
            name="newtask"
            options={{
              headerTitle: "New Task",
              headerTintColor: "navy",
            }}
          />
          <Stack.Screen
            name="task/[id]"
            options={{
              headerTitle: "Task",
              headerTintColor: "navy",
            }}
          />
          <Stack.Screen
            name="task/edit/[id]"
            options={{
              headerTitle: "Edit Task",
              headerTintColor: "navy",
            }}
          />
        </Stack>
      </AppProvider>
    </TaskProvider>
  );
}
