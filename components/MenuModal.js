import { useState } from "react";
import IconButton from "./common/IconButton";
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from "react-native";
import Menu from "./Menu";

export default function MenuModal() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <IconButton icon="menu" onPress={() => setShowMenu(true)} />
      <Modal
        title="Menu"
        visible={showMenu}
        animationIn="bounce"
        transparent={true}
        animationOut="bounce"
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
    </>
  );
}
