import { TouchableOpacity } from "react-native";
import appColors from "../../styles/colors";
import styles from "../../styles/styles";
import { MaterialIcons } from "@expo/vector-icons";

export default function SmallIconButton({ icon, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.smallIconButton}>
      <MaterialIcons name={icon} size={24} color={appColors.primary} />
    </TouchableOpacity>
  );
}
