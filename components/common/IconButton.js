import { TouchableOpacity } from "react-native";
import appColors from "../../styles/colors";
import styles from "../../styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
export default function IconButton({ icon, onPress, disabled }) {
  return (
    <TouchableOpacity
      onPress={disabled ? null : onPress}
      style={styles.iconButton}
    >
      <MaterialIcons
        name={icon}
        size={32}
        color={disabled ? appColors.disabled : appColors.primary}
      />
    </TouchableOpacity>
  );
}
