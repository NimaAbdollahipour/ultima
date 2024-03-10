import { TextInput } from "react-native";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "../../styles/styles";

export default function Input({
  value,
  onChangeText,
  large,
  lines,
  multiline,
  placeholder,
}) {
  const { darkMode } = useContext(ThemeContext);
  const [text, setText] = useState(value ? value : "");

  useEffect(() => {
    onChangeText(text);
  }, [text]);

  return (
    <TextInput
      style={
        darkMode
          ? large
            ? styles.inputLargeDark
            : styles.inputDark
          : large
          ? styles.inputLarge
          : styles.input
      }
      multiline={multiline}
      lines={lines}
      value={text}
      placeholder={placeholder}
      onChangeText={setText}
    />
  );
}
