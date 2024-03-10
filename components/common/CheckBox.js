import { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";
import appColors from "../../styles/colors";
import appColorsDark from "../../styles/darkColors";
import { MaterialIcons } from "@expo/vector-icons";

export default function Checkbox({ checked, onChange }) {
  const [checked, setChecked] = useState(false);
  const { darkMode } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      onPress={() => {
        setChecked((prev) => {
          onChange(!prev);
          return !prev;
        });
      }}
    >
      <MaterialIcons
        name={checked ? "check-box" : "check-box-outline-blank"}
        size={32}
        color={darkMode ? appColorsDark.primary : appColors.primary}
      />
    </TouchableOpacity>
  );
}
