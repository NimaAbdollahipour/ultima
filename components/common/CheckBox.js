import { useState } from "react";
import { TouchableOpacity } from "react-native";
import appColors from "../../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function Checkbox({ checked, onChange }) {
  const [checked, setChecked] = useState(false);
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
        color={appColors.primary}
      />
    </TouchableOpacity>
  );
}
