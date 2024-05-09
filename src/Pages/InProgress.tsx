import React from "react";
import { Input } from "../components/Input";
import { View } from "react-native";
import { FlatListTask } from "../components/FlatList";

export const InProgress = () => {
  return (
    <View style={{ flex: 1 }}>
      <Input />
      <FlatListTask />
    </View>
  );
};
