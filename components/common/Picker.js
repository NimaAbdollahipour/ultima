import { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import appColorsDark from "../../styles/darkColors";
import appColors from "../../styles/colors";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Picker({ options, selected, onChange }) {
  const [selected, setSelected] = useState();

  const { darkMode } = useContext(ThemeContext);
  const colors = darkMode ? appColorsDark : appColors;

  return (
    <View>
      {options.map((option, id) => (
        <TouchableOpacity onPress={() => setSelected()}>
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
