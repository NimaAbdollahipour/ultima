import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import TaskOptions from "./TaskOptions";
import { AppContext } from "../contexts/AppContext";
import styles from "../styles/styles";
import MenuModal from "./MenuModal";
import { ThemeContext } from "../contexts/ThemeContext";
import IconButton from "./common/IconButton";
import { useRouter } from "expo-router";

export default function Header() {
  const router = useRouter();
  const { selectionMode } = useContext(AppContext);
  const { darkMode } = useContext(ThemeContext);
  return (
    <View style={darkMode ? styles.headerDark : styles.header}>
      <MenuModal />
      <Text style={darkMode ? styles.headingDark : styles.heading}>Tasks</Text>
      {selectionMode ? (
        <TaskOptions />
      ) : (
        <IconButton
          icon="add"
          onPress={() => {
            router.push("/newtask");
          }}
        />
      )}
    </View>
  );
}
