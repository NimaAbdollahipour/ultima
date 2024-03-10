import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import appColorsDark from "../../styles/darkColors";
import appColors from "../../styles/colors";
import styles from "../../styles/styles";

export default function Priority({ value }) {
  const { darkMode } = useContext(ThemeContext);
  const stars = [];
  for (let i = 0; i < value; i++) {
    stars.push(i);
  }
  return (
    <View style={styles.priority}>
      {stars.map((item) => (
        <MaterialIcons
          name="star-outline"
          size={24}
          color={darkMode ? appColorsDark.primary : appColors.primary}
          key={item}
        />
      ))}
    </View>
  );
}
