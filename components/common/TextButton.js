import { TouchableOpacity, Text } from "react-native";
import appColors from "../../styles/colors";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import appColorsDark from "../../styles/darkColors";
import styles from "../../styles/styles";
import { MaterialIcons } from "@expo/vector-icons";

export default function TextButton({ icon, variant, onPress, text }) {
  const { darkMode } = useContext(ThemeContext);
  let buttonStyle;

  if (variant === "menu") {
    if (darkMode) {
      buttonStyle = styles.menuButtonDark;
    } else {
      buttonStyle = styles.menuButton;
    }
  } else {
    if (darkMode) {
      buttonStyle = styles.textButtonDark;
    } else {
      buttonStyle = styles.textButton;
    }
  }

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      {icon && (
        <MaterialIcons
          name={icon}
          size={24}
          color={
            darkMode
              ? variant === "menu"
                ? appColorsDark.primary
                : appColorsDark.altText
              : variant === "menu"
              ? appColors.primary
              : appColors.altText
          }
        />
      )}
      <Text
        style={{
          color: variant === "menu" ? appColors.primary : appColors.altText,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
