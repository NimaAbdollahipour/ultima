import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";
import appColorsDark from "../../styles/darkColors";
import appColors from "../../styles/colors";
import styles from "../../styles/styles";
import { MaterialIcons } from "@expo/vector-icons";

export default function SmallIconButton({ icon, onPress }) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <TouchableOpacity onPress={onPress} style={styles.smallIconButton}>
      <MaterialIcons
        name={icon}
        size={24}
        color={darkMode ? appColorsDark.primary : appColors.primary}
      />
    </TouchableOpacity>
  );
}
