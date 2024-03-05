import { useLocalSearchParams } from "expo-router";
import TaskForm from "../../../components/TaskForm";
import { useContext } from "react";
import { TaskContext } from "../../../contexts/TaskContext";

export default function EditForm() {
  const { id } = useLocalSearchParams();
  const { tasks } = useContext(TaskContext);
  const task = tasks.find((item) => item.id === id);
  return <TaskForm task={task} />;
}
