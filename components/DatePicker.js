import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const DatePicker = (props) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [selectedDate, setSelectedDate] = useState(
    props.current ? props.current : new Date()
  );
  const [field, setField] = useState("year");

  useEffect(() => {
    if (props.onChange) {
      props.onChange(selectedDate);
    }
  }, [selectedDate]);

  function modifyDay(n) {
    setSelectedDate((prev) => {
      return new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() + n);
    });
  }

  function modifyMonth(n) {
    setSelectedDate((prev) => {
      return new Date(prev.getFullYear(), prev.getMonth() + n, prev.getDate());
    });
  }

  function modifyYear(n) {
    setSelectedDate((prev) => {
      return new Date(prev.getFullYear() + n, prev.getMonth(), prev.getDate());
    });
  }

  function modifyWeek(n) {
    setSelectedDate((prev) => {
      return new Date(
        prev.getFullYear(),
        prev.getMonth(),
        prev.getDate() + 7 * n
      );
    });
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.yearContainer}>
          {field === "year" && (
            <TouchableOpacity
              onPress={() => modifyYear(-1)}
              style={styles.button}
            >
              <MaterialIcons name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => setField("year")}
            style={styles.text}
          >
            <Text>{selectedDate.getFullYear()}</Text>
          </TouchableOpacity>
          {field === "year" && (
            <TouchableOpacity
              onPress={() => modifyYear(1)}
              style={styles.button}
            >
              <MaterialIcons name="arrow-right" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.otherContainer}>
          {field === "month" && (
            <TouchableOpacity
              onPress={() => modifyMonth(-1)}
              style={styles.button}
            >
              <MaterialIcons name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => setField("month")}
            style={styles.text}
          >
            <Text>{selectedDate.getMonth() + 1}</Text>
          </TouchableOpacity>
          {field === "month" && (
            <TouchableOpacity
              onPress={() => modifyMonth(1)}
              style={styles.button}
            >
              <MaterialIcons name="arrow-right" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.otherContainer}>
          {field === "day" && (
            <TouchableOpacity
              onPress={() => modifyDay(-1)}
              style={styles.button}
            >
              <MaterialIcons name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => setField("day")} style={styles.text}>
            <Text>{selectedDate.getDate()}</Text>
          </TouchableOpacity>
          {field === "day" && (
            <TouchableOpacity
              onPress={() => modifyDay(1)}
              style={styles.button}
            >
              <MaterialIcons name="arrow-right" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.otherContainer}>
          <TouchableOpacity
            onPress={() => modifyWeek(-1)}
            style={styles.button}
          >
            <MaterialIcons name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setField("day")} style={styles.text}>
            <Text>{days[selectedDate.getDay()]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => modifyWeek(1)} style={styles.button}>
            <MaterialIcons name="arrow-right" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    gap: 3,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    backgroundColor: "white",
  },
  yearContainer: {
    display: "flex",
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    flexDirection: "row",
    backgroundColor: "lightgray",
    borderRadius: 4,
  },
  otherContainer: {
    display: "flex",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    flexDirection: "row",
    backgroundColor: "lightgray",
    borderRadius: 4,
  },
  text: {
    paddingVertical: 5,
    backgroundColor: "lightgray",
    borderRadius: 4,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
  button: {
    paddingVertical: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DatePicker;
