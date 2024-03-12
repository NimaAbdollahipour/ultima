import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import appColors from "../../styles/colors";
import styles from "../../styles/styles";

export default function Priority({ value, done }) {
  const stars = [];
  for (let i = 0; i < value; i++) {
    stars.push(i);
  }
  return (
    <View style={styles.priority}>
      {stars.map((item) => (
        <MaterialIcons
          name={done ? "star" : "star-outline"}
          size={24}
          color={done ? appColors.primary : appColors.text}
          key={item}
        />
      ))}
    </View>
  );
}
