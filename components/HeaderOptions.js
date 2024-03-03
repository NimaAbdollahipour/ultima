import {
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import styles from "../styles/styles";
import TaskForm from "./TaskForm";
import Modal from "react-native-modal";

export default function HeaderOption() {
  const { setSelectionMode, setShowCompact } = useContext(AppContext);
  const [showForm, setShowForm] = useState(false);
  return (
    <View style={styles.smallRow}>
      <TouchableOpacity
        onPress={() => {
          setShowForm(true);
          setShowCompact(false);
        }}
      >
        <MaterialIcons name="add" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectionMode(true)}>
        <MaterialIcons name="check-box" size={24} color="black" />
      </TouchableOpacity>
      <Modal
        title="New Task"
        onCancel={null}
        onOK={null}
        visible={showForm}
        onRequestClose={() => {
          setShowForm(false);
          setShowCompact(true);
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            setShowForm(false);
            setShowCompact(true);
          }}
        >
          <View
            style={[
              StyleSheet.absoluteFillObject,
              {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
              },
            ]}
          >
            <TaskForm
              close={() => {
                setShowForm(false);
                setShowCompact(true);
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
