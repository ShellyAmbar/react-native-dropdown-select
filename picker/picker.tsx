import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import React, {memo} from "react";
import Style from "./picker.styles";
import usePicker from "./hooks/usePicker";
import Entypo from "react-native-vector-icons/Entypo";
import Spacer from "../spacer/spacer";
import {Item, PickerProps} from "./interfaces";

const Picker = ({
  dataInput,
  textStyle,
  containerStyle,
  defaultSelectedId = 0,
  itemTextStyle,
  seperatorStyle,
}: PickerProps) => {
  const {
    isOpen,
    setIsOpen,

    selectedItem,
    setSelectedItem,
  } = usePicker(defaultSelectedId, dataInput);

  const renderItem = ({item}: {item: Item}) => {
    return (
      <View key={item.id} style={[Style.vertical]}>
        <TouchableOpacity
          style={Style.item}
          onPress={() => {
            setSelectedItem(item);
            item.onClick();
            setIsOpen(false);
          }}
        >
          <Text style={[Style.textItem, {...itemTextStyle}]}>{item.text}</Text>
        </TouchableOpacity>
        {item.id < dataInput.length - 1 ? (
          <View style={[Style.saperator, {...seperatorStyle}]} />
        ) : (
          <Spacer size={20} />
        )}
      </View>
    );
  };

  return (
    <View style={Style.vertical}>
      <TouchableOpacity
        onPress={() => {
          setIsOpen((prev) => !prev);
        }}
        style={[{...Style.container}, {...containerStyle}]}
      >
        {isOpen ? (
          <Entypo name="chevron-small-up" size={22} color={"#FFF"} />
        ) : (
          <Entypo name="chevron-small-down" size={22} color={"#FFF"} />
        )}
        <Spacer size={10} isVertical={false} />
        {selectedItem ? (
          <>
            <Text style={[Style.textSelected, {...textStyle}]}>
              {selectedItem.text}
            </Text>
          </>
        ) : (
          <>
            <Spacer size={10} isVertical={false} />
            <Text style={[Style.textSelected, {...textStyle}]}>{"Select"}</Text>
          </>
        )}
      </TouchableOpacity>
      {isOpen && (
        <View style={Style.vertical}>
          <ScrollView nestedScrollEnabled={true} style={Style.list}>
            {dataInput?.map((item) => renderItem({item}))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default memo(Picker);
