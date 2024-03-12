import styles from "../../styles/styles";
import { View, Text } from "react-native";
export default function LabelValue({ label, value }) {
  return (
    <View style={styles.labelValue}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}
