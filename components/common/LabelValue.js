import { useContext } from "react";
import styles from "../../styles/styles";
import { ThemeContext } from "../../contexts/ThemeContext";
import { View, Text } from "react-native";
export default function LabelValue({ label, value }) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <View style={darkMode ? styles.labelValueDark : styles.labelValue}>
      <Text style={darkMode ? styles.labelDark : styles.label}>{label}</Text>
      <Text style={darkMode ? styles.textDark : styles.text}>{value}</Text>
    </View>
  );
}
