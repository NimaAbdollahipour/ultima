import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import TaskOptions from "./TaskOptions";
import { AppContext } from "../contexts/AppContext";
import styles from "../styles/styles";
import MenuModal from "./MenuModal";
import IconButton from "./common/IconButton";
import { useRouter } from "expo-router";

export default function Header() {
  const router = useRouter();
  const { selectionMode } = useContext(AppContext);
  return (
    <View style={styles.header}>
      <MenuModal />
      <Text style={styles.heading}>Tasks</Text>
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
