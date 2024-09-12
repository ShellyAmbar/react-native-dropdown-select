import {StyleSheet} from "react-native";
export default StyleSheet.create({
  vertical: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 200,
  },
  saperator: {
    height: 1,
    width: "80%",
    backgroundColor: "#D7D9DE",
    marginVertical: 10,
  },
  itemImage: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  textItem: {
    fontSize: 14,
    color: "#000",
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  textSelected: {
    fontSize: 14,
    color: "#000",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  list: {
    position: "absolute",
    top: 0,
    zIndex: 4,
    width: "100%",
    paddingHorizontal: 10,
    maxHeight: 150,
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingVertical: 15,
  },
});
