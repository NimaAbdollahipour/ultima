import React, { useContext, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
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
        paddingVertical: 15,
        paddingHorizontal: 10,
        gap: 10,
        borderBottomWidth: 1,
        borderColor: "#dddddd",
      }}
    >
      <Modal
        title="Menu"
        onCancel={null}
        onOK={null}
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
      <TouchableOpacity onPress={() => setShowMenu(true)}>
        <MaterialIcons name="menu" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.heading}>Tasks</Text>
      {selectionMode ? <TaskOptions /> : <HeaderOption />}
    </View>
  );
}
