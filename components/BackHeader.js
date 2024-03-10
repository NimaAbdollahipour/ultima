import { useRouter } from "expo-router";
import IconButton from "./common/IconButton";
import { Text, View } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "../styles/styles";

export default function BackHeader({ title, right }) {
  const router = useRouter();
  const { darkMode } = useContext(ThemeContext);
  function goBack() {
    router.back();
  }

  return (
    <View style={darkMode ? styles.headerDark : styles.header}>
      <IconButton icon="arrow-back" onPress={goBack} />
      <Text style={darkMode ? styles.headingDark : styles.heading}>
        {title}
      </Text>
      <View>{right}</View>
    </View>
  );
}
