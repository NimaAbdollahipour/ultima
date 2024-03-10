import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
const PriorityPicker = (props) => {
  const [priority, setPriority] = useState(props.priority ? props.priority : 2);
  useEffect(() => {
    if (props.onChange) {
      props.onChange(priority);
    }
  }, [priority]);

  return (
    <View style={styles.pickerContainer}>
      <TouchableOpacity
        onPress={() => setPriority(1)}
        style={priority === 1 ? styles.pickerSelected : styles.pickerButton}
      >
        <Text style={priority === 1 && { color: "white" }}>low</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setPriority(2)}
        style={priority === 2 ? styles.pickerSelected : styles.pickerButton}
      >
        <Text style={priority === 2 && { color: "white" }}>med</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setPriority(3)}
        style={priority === 3 ? styles.pickerSelected : styles.pickerButton}
      >
        <Text style={priority === 3 && { color: "white" }}>high</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PriorityPicker;
