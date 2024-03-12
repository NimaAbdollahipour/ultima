import { Stack } from "expo-router";
import AppProvider from "../contexts/AppContext";
import TaskProvider from "../contexts/TaskContext";
import MainHeader from "../components/MainHeader";
import { StatusBar } from "expo-status-bar";
import BackHeader from "../components/BackHeader";
import appColors from "../styles/colors";

export default function Layout() {
  return (
    <TaskProvider>
      <AppProvider>
        <StatusBar backgroundColor={appColors.altBackground} />
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              header: () => <MainHeader />,
            }}
          />
          <Stack.Screen
            name="newtask"
            options={{
              header: () => <BackHeader title="New Task" />,
            }}
          />
          <Stack.Screen
            name="task/[id]"
            options={{
              header: () => <BackHeader title="Task" />,
            }}
          />
          <Stack.Screen
            name="task/edit/[id]"
            options={{
              header: () => <BackHeader title="Edit Task" />,
            }}
          />
        </Stack>
      </AppProvider>
    </TaskProvider>
  );
}
