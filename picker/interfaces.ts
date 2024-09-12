import {TextStyle, ViewStyle} from "react-native";

type Item = {
  id: number;
  text: string;
  uri?: string;
  onClick: () => void;
};
type PickerProps = {
  dataInput: Item[];
  textStyle?: TextStyle;
  itemTextStyle?: TextStyle;
  containerStyle?: ViewStyle;
  defaultSelectedId: number;
  seperatorStyle?: ViewStyle;
};

export {Item, PickerProps};
