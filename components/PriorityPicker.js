import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const PriorityPicker = (props) => {
  const [priority, setPriority] = useState(props.priority ? props.priority : 2);
  useEffect(() => {
    if (props.onChange) {
      props.onChange(priority);
    }
  }, [priority]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setPriority(1)}
        style={priority === 1 ? styles.selected : styles.button}
      >
        <Text style={priority === 1 && styles.text}>low</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setPriority(2)}
        style={priority === 2 ? styles.selected : styles.button}
      >
        <Text style={priority === 2 && styles.text}>med</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setPriority(3)}
        style={priority === 3 ? styles.selected : styles.button}
      >
        <Text style={priority === 3 && styles.text}>high</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 4,
    padding: 2,
  },
  button: {
    paddingVertical: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  selected: {
    paddingVertical: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
    borderRadius: 4,
    flex: 1,
  },
});

export default PriorityPicker;
