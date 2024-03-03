import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Priority({ value }) {
  const stars = [];
  for (let i = 0; i < value; i++) {
    stars.push(i);
  }
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {stars.map((item) => (
        <MaterialIcons name="star" size={24} color="#444" key={item} />
      ))}
    </View>
  );
}
