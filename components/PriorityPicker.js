import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const PriorityPicker = (props) => {
  const [priority, setPriority] = useState(
    props.priority ? props.priority : "med"
  );
  useEffect(() => {
    if (props.onChange) {
      props.onChange(priority);
    }
  }, [priority]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setPriority("low")}
        style={priority === "low" ? styles.selectedLeft : styles.buttonLeft}
      >
        <Text style={priority === "low" && styles.text}>low</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setPriority("med")}
        style={priority === "med" ? styles.selected : styles.button}
      >
        <Text style={priority === "med" && styles.text}>med</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setPriority("high")}
        style={priority === "high" ? styles.selectedRight : styles.buttonRight}
      >
        <Text style={priority === "high" && styles.text}>high</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
  },
  text: {
    color: "white",
  },
  button: {
    paddingVertical: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
    flex: 1,
  },
  buttonLeft: {
    paddingVertical: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    flex: 1,
  },
  buttonRight: {
    paddingVertical: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
    flex: 1,
  },
  selected: {
    paddingVertical: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    flex: 1,
  },
  selectedLeft: {
    paddingVertical: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    flex: 1,
  },
  selectedRight: {
    paddingVertical: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
    flex: 1,
  },
});

export default PriorityPicker;
