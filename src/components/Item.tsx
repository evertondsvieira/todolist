import React from "react";
import Checkbox from "expo-checkbox";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useTaskContext } from "../contexts/TaskContext";

interface ItemProps {
  item: any;
}

export const Item = (props: ItemProps) => {
  const { item } = props
  
  const { width } = Dimensions.get("window")
  const { removeTask } = useTaskContext()

  const [checked, setChecked] = React.useState(false)
  
  const handleCheckboxChange = () => {
    setChecked((state) => !state)
  }

  return (
    <View style={[styles.container, { maxWidth: width }]}>
      <View style={styles.subContainer}>
        <Checkbox
          color="green"
          disabled={false}
          value={checked ? true : false}
          onValueChange={handleCheckboxChange}
        />
        <Text
          style={[
            styles.text,
            {
              textDecorationLine: checked ? "line-through" : "none",
              color: checked ? "#808080" : "#000000",
            },
          ]}
        >
          {item.text}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => removeTask(item.id)}>
        <AntDesign name="close" size={16} color="#ffffff" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#f3f3f3f3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  subContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },

  text: {
    flex: 1,
  },

  button: {
    padding: 8,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    backgroundColor: "#DC143C",
  },
})
