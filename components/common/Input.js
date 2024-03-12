import { TextInput } from "react-native";
import { useEffect, useState } from "react";
import styles from "../../styles/styles";

export default function Input({
  value,
  onChangeText,
  large,
  lines,
  multiline,
  placeholder,
  onFocus,
}) {
  const [text, setText] = useState(value ? value : "");

  useEffect(() => {
    onChangeText(text);
  }, [text]);

  return (
    <TextInput
      style={large ? styles.inputLarge : styles.input}
      multiline={multiline}
      lines={lines}
      value={text}
      placeholder={placeholder}
      onChangeText={setText}
      onPressIn={onFocus}
    />
  );
}
