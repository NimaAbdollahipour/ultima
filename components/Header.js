import React, { useContext, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import { TouchableOpacity } from "react-native";
import TaskOptions from "./TaskOptions";
import HeaderOption from "./HeaderOptions";
import { AppContext } from "../contexts/AppContext";
import styles from "../styles/styles";
import Menu from "./Menu";

export default function Header({ navigation }) {
  const { selectionMode } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <View
      style={{
        height: 64,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "blue",
        gap: 10,
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
        <Menu
          close={() => {
            setShowMenu(false);
          }}
        />
      </Modal>
      <TouchableOpacity onPress={() => setShowMenu(true)}>
        <MaterialIcons name="menu" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.heading}>ULTIMA</Text>
      {selectionMode ? (
        <TaskOptions navigation={navigation} />
      ) : (
        <HeaderOption navigation={navigation} />
      )}
    </View>
  );
}
