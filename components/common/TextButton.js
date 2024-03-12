import { TouchableOpacity, Text } from "react-native";
import appColors from "../../styles/colors";
import styles from "../../styles/styles";
import { MaterialIcons } from "@expo/vector-icons";

export default function TextButton({ icon, variant, onPress, text }) {
  return (
    <TouchableOpacity
      style={variant === "menu" ? styles.menuButton : styles.textButton}
      onPress={onPress}
    >
      {icon && (
        <MaterialIcons
          name={icon}
          size={24}
          color={variant === "menu" ? appColors.primary : appColors.altText}
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
