import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadTasks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("tasks");
    return jsonValue !== null
      ? await JSON.parse(jsonValue, (key, value) => {
          if (key === "date") {
            return new Date(value);
          }
          return value;
        })
      : [];
  } catch (error) {
    console.error("Error loading tasks:", error);
    return [];
  }
};

export const saveTasks = async (tasks) => {
  try {
    await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
  } catch (error) {
    console.error("Error saving tasks:", error);
  }
};

export const saveTheme = async (theme) => {
  try {
    await AsyncStorage.setItem("theme", JSON.stringify(theme));
  } catch (error) {
    console.error("Error saving theme:", error);
  }
};

export const loadTheme = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("theme");
    return jsonValue !== null ? await JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error("Error loading theme:", error);
    return [];
  }
};

export const clearTasks = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error("Error cleanup:", error);
  }
};
