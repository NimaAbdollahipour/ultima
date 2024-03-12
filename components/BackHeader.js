import { useRouter } from "expo-router";
import IconButton from "./common/IconButton";
import { Text, View } from "react-native";
import styles from "../styles/styles";

export default function BackHeader({ title, right }) {
  const router = useRouter();
  function goBack() {
    router.back();
  }

  return (
    <View style={styles.header}>
      <IconButton icon="arrow-back" onPress={goBack} />
      <Text style={styles.heading}>{title}</Text>
      <View>{right}</View>
    </View>
  );
}
