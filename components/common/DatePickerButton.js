import { TouchableOpacity, Text, View } from "react-native";
import SmallIconButton from "./SmallIconButton";
import styles from "../../styles/styles";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function DatePickerButton({
  active,
  left,
  right,
  onPress,
  text,
}) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      {active ? (
        <View style={darkMode ? styles.dateButtonDark : styles.dateButton}>
          <SmallIconButton onPress={left} icon="arrow-left" />
          <Text style={darkMode ? styles.darkText : styles.text}>{text}</Text>
          <SmallIconButton onPress={right} icon="arrow-right" />
        </View>
      ) : (
        <TouchableOpacity
          onPress={onPress}
          style={darkMode ? styles.dateButtonDark : styles.dateButton}
        >
          <Text style={darkMode ? styles.darkText : styles.text}>{text}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}
