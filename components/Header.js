import React, { useContext, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Modal from "react-native-modal";
import { TouchableOpacity } from "react-native";
import TaskOptions from "./TaskOptions";
import HeaderOption from "./HeaderOptions";
import { AppContext } from "../contexts/AppContext";
import styles from "../styles/styles";
import Menu from "./Menu";

export default function Header() {
  const { selectionMode } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
        gap: 10,
        borderBottomWidth: 1,
        borderColor: "#dddddd",
        width: "100%",
      }}
    >
      <Modal
        title="Menu"
        visible={showMenu}
        onRequestClose={() => {
          setShowMenu(false);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setShowMenu(false)}>
          <View style={StyleSheet.absoluteFill}>
            <Menu
              close={() => {
                setShowMenu(false);
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <TouchableOpacity
          onPress={() => setShowMenu(true)}
          style={{ padding: 8 }}
        >
          <MaterialIcons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.heading}>Tasks</Text>
      </View>
      {selectionMode ? <TaskOptions /> : <HeaderOption />}
    </View>
  );
}
