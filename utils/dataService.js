import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadTasks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("tasks");
    return jsonValue !== null
      ? JSON.parse(jsonValue, (key, value) => {
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
