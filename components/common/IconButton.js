import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import appColorsDark from "../../styles/darkColors";
import appColors from "../../styles/colors";
import styles from "../../styles/styles";
import { ThemeContext } from "../../contexts/ThemeContext";
import { MaterialIcons } from "@expo/vector-icons";
export default function IconButton({ icon, onPress, disabled }) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      onPress={disabled ? null : onPress}
      style={styles.iconButton}
    >
      <MaterialIcons
        name={icon}
        size={32}
        color={
          darkMode
            ? disabled
              ? appColorsDark.disabled
              : appColorsDark.primary
            : disabled
            ? appColors.disabled
            : appColors.primary
        }
      />
    </TouchableOpacity>
  );
}
