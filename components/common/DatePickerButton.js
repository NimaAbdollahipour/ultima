import { TouchableOpacity, Text, View } from "react-native";
import SmallIconButton from "./SmallIconButton";
import styles from "../../styles/styles";

export default function DatePickerButton({
  active,
  left,
  right,
  onPress,
  text,
}) {
  return (
    <>
      {active ? (
        <View style={styles.dateButton}>
          <SmallIconButton onPress={left} icon="arrow-left" />
          <Text style={styles.text}>{text}</Text>
          <SmallIconButton onPress={right} icon="arrow-right" />
        </View>
      ) : (
        <TouchableOpacity onPress={onPress} style={styles.dateButton}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}
