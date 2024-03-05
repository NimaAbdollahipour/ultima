import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function HeaderOption() {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => {
        router.push("/newtask");
      }}
      style={{ padding: 8 }}
    >
      <MaterialIcons name="add" size={24} color="navy" />
    </TouchableOpacity>
  );
}
