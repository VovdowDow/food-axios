import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

const SearchBox = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={style.container}>
      <Feather name="search" size={24} color="#555" style={{marginRight: 10}} />
      <TextInput
        style={style.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 10,
  },
//   icon: {
//     marginRight: 10,
//   },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
});

export default SearchBox;
