import { StyleSheet } from "react-native";
import appColors from "./colors";
import appColorsDark from "./darkColors";
import { StatusBar } from "react-native";
const height = 48;
const heightDouble = 96;
const large = 12;
const medium = 8;
const small = 4;
const thin = 1;
const thick = 2;

export default styles = StyleSheet.create({
  iconButton: {
    padding: 8,
  },
  dateButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: height,
    backgroundColor: appColors.input,
  },
  dateButtonDark: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: height,
    backgroundColor: appColorsDark.input,
  },
  text: {
    color: appColors.text,
    fontWeight: "bold",
  },
  textDark: {
    color: appColorsDark.text,
    fontWeight: "bold",
  },
  datePicker: {
    display: "flex",
    gap: small,
  },
  datePickerDark: {
    display: "flex",
    gap: small,
  },
  dateContainer: {
    display: "flex",
    flexDirection: "row",
    gap: small,
  },
  dateContainerDark: {
    display: "flex",
    flexDirection: "row",
    gap: small,
  },
  iconButton: {
    padding: medium,
  },

  pickerNormal: {},
  pickerSelected: {},
  pickerNormalDark: {},
  pickerSelectedDark: {},
  pickerContainer: {},
  pickerContainerDark: {},

  priority: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: small,
  },

  smallIconButton: {},

  textButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: medium,
    gap: medium,
    backgroundColor: appColors.primary,
    height: height,
    borderRadius: small,
  },
  textButtonDark: {},
  menuButton: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    padding: medium,
    gap: medium,
  },
  menuButtonDark: {},
  input: {
    height: height,
    borderColor: appColors.input,
    paddingHorizontal: small,
    flex: 1,
    borderWidth: thick,
    borderRadius: small,
    paddingHorizontal: medium,
  },
  inputDark: {},
  header: {
    display: "flex",
    paddingHorizontal: small,
    paddingVertical: large,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: thin,
    borderBottomColor: appColors.border,
    marginTop: StatusBar.currentHeight || 0,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    color: appColors.primary,
  },
  formContainer: {
    display: "flex",
    flex: 1,
    gap: small,
  },
  compactForm: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: medium,
    gap: small,
    borderTopColor: appColors.border,
    borderTopWidth: thin,
    backgroundColor: appColors.altBackground,
  },
  menuContent: {
    padding: medium,
    borderRadius: medium,
    width: "50%",
    elevation: 5,
    backgroundColor: appColors.altBackground,
    top: 30,
    left: medium,
  },
  taskList: {
    flex: 1,
    paddingTop: 3,
  },

  container: {
    display: "flex",
    padding: large,
    //borderRadius: medium,
    marginBottom: small,
    backgroundColor: "white",
    elevation: small,
    marginHorizontal: small,
    borderLeftWidth: thick,
    borderColor: appColors.border,
  },
  done: {
    backgroundColor: "lightblue",
    borderColor: appColors.primary,
  },
  selected: {
    backgroundColor: "lightgray",
    borderColor: appColors.text,
  },
  textContainer: {
    marginBottom: large,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Added alignment for centering items vertically
  },
  bodyText: {
    flex: 1, // Take remaining space in the row
    fontWeight: "bold",
    marginLeft: large, // Added left margin for spacing
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: medium, // Added top margin for separation
  },
  dateText: {
    color: "gray",
  },
  weekdayText: {
    color: "gray",
  },
  formContainer: {
    display: "flex",
    gap: medium,
    flexDirection: "column",
    padding: medium,
  },
  formItem: {
    height: height,
  },
  formItemDouble: {
    height: heightDouble,
    justifyContent: "flex-start",
  },
  pickerContainer: {
    display: "flex",
    height: height,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: small,
    borderColor: appColors.input,
    borderWidth: thick,
    borderRadius: small,
  },
  pickerSelected: {
    flex: 1,
    backgroundColor: appColors.primary,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: small,
  },
  pickerButton: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  dateButton: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "100%",
    borderColor: appColors.altBackground,
    borderRadius: small,
    borderWidth: 1,
  },
  datePicker: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: small,
    borderColor: appColors.input,
    borderWidth: thick,
    borderRadius: small,
    gap: small,
  },
  dateContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: small,
  },
  warning: {
    borderColor: appColors.warning,
    borderLeftWidth: thick,
  },
  buttonRow: {
    display: "flex",
    flexDirection: "row",
  },
  details: {
    padding: medium,
    gap: medium,
  },
  label: {
    fontWeight: "bold",
    color: appColors.primary,
    fontSize: 16,
  },
  smallIconButton: {
    padding: medium,
  },
});
