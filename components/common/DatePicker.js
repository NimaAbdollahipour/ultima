import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import DatePickerButton from "./DatePickerButton";
import styles from "../../styles/styles";
import { ThemeContext } from "../../contexts/ThemeContext";

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

  const { darkMode } = useContext(ThemeContext);

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

  return (
    <View style={darkMode ? styles.datePickerDark : styles.datePicker}>
      <View style={darkMode ? styles.dateContainerDark : styles.dateContainer}>
        <DatePickerButton
          onPress={() => setField("year")}
          text={selectedDate.getFullYear()}
          left={() => modifyYear(-1)}
          right={() => modifyYear(-1)}
          active={field === "year"}
        />
        <DatePickerButton
          onPress={() => setField("month")}
          text={selectedDate.getMonth()}
          left={() => modifyMonth(-1)}
          right={() => modifyMonth(-1)}
          active={field === "month"}
        />
        <DatePickerButton
          onPress={() => setField("day")}
          text={selectedDate.getDate()}
          left={() => modifyDay(-1)}
          right={() => modifyDay(-1)}
          active={field === "day"}
        />
      </View>
      <View style={darkMode ? styles.dateContainerDark : styles.dateContainer}>
        <DatePickerButton
          onPress={() => setField("week")}
          text={days[selectedDate.getDay()]}
          left={() => modifyDay(-7)}
          right={() => modifyDay(7)}
          active={field === "week"}
        />
      </View>
    </View>
  );
};

export default DatePicker;
