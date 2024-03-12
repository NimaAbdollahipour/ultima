import { StyleSheet } from "react-native";
import appColors from "./colors";
import { StatusBar } from "react-native";
const height = 48;
const buttonHeight = 36;
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
  text: {
    color: appColors.text,
    fontWeight: "bold",
  },
  datePicker: {
    display: "flex",
    gap: small,
  },
  dateContainer: {
    display: "flex",
    flexDirection: "row",
    gap: small,
  },
  iconButton: {
    padding: medium,
  },
  priority: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: small,
  },
  textButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: medium,
    gap: medium,
    backgroundColor: appColors.primary,
    height: buttonHeight,
    borderRadius: small,
  },
  menuButton: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    padding: medium,
    gap: medium,
  },
  input: {
    borderColor: appColors.input,
    flex: 1,
    borderWidth: thick,
    borderRadius: small,
    paddingHorizontal: medium,
    backgroundColor: appColors.altBackground,
    verticalAlign: "top",
    justifyContent: "flex-start",
    textAlignVertical: "top",
    padding: large,
    height: height,
  },
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
    backgroundColor: appColors.altBackground,
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
    backgroundColor: appColors.background,
  },
  container: {
    display: "flex",
    padding: large,
    marginBottom: small,
    backgroundColor: appColors.altBackground,
    marginHorizontal: small,
    borderLeftWidth: thick,
    borderColor: appColors.border,
  },
  done: {
    backgroundColor: appColors.done,
    borderColor: appColors.primary,
  },
  selected: {
    backgroundColor: appColors.selected,
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
    color: appColors.text,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: medium, // Added top margin for separation
  },
  dateText: {
    color: appColors.fadedText,
  },
  weekdayText: {
    color: appColors.fadedText,
  },
  formContainer: {
    display: "flex",
    gap: medium,
    flexDirection: "column",
    padding: medium,
    flex: 1,
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
    backgroundColor: appColors.altBackground,
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
    backgroundColor: appColors.background,
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
    backgroundColor: appColors.altBackground,
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
    padding: large,
    gap: medium,
    flex: 1,
  },
  label: {
    fontWeight: "bold",
    color: appColors.primary,
    fontSize: 16,
  },
  smallIconButton: {
    padding: medium,
  },
  taskViewContent: {
    flex: 1,
    gap: large,
  },
  formItemExpand: {
    flex: 1,
  },
});
