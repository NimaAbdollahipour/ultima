import { Switch, View, Text } from "react-native";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { TaskContext } from "../contexts/TaskContext";
import { getTomorrow } from "../utils/dateFuncs";
import { clearTasks } from "../utils/dataService";
import TextButton from "./common/TextButton";
import styles from "../styles/styles";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Menu() {
  const { setVisibleDate, showDone, setShowDone } = useContext(AppContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { setTasks } = useContext(TaskContext);

  function deleteCompleted() {
    setTasks((prev) => [...prev].filter((item) => !item.done));
  }

  return (
    <View style={styles.menuContent}>
      <TextButton
        icon={showDone ? "visibility" : "visibility-off"}
        onPress={() => setShowDone((prev) => !prev)}
        text={showDone ? "hide completed" : "show completed"}
        variant="menu"
      />
      <TextButton
        icon="delete"
        onPress={deleteCompleted}
        text="clear done"
        variant="menu"
      />
      <TextButton
        onPress={() => setVisibleDate(new Date())}
        text="today's tasks"
        variant="menu"
      />
      <TextButton
        onPress={() => setVisibleDate(getTomorrow())}
        text="tomorrows's tasks"
        variant="menu"
      />
      <TextButton
        onPress={() => setVisibleDate(null)}
        text="all tasks"
        variant="menu"
      />
      <TextButton onPress={clearTasks} text="clean" variant="menu" />
      <View style={styles.menuButton}>
        <Switch
          onValueChange={() => setDarkMode((prev) => !prev)}
          value={darkMode}
        />
        <Text>Dark Mode</Text>
      </View>
    </View>
  );
}
