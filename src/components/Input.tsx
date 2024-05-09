import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTaskContext } from "../contexts/TaskContext";

export const Input = () => {
  const {task, setTask, addTask} = useTaskContext()
  return (
    <View style={styles.container}>
      <TextInput
        value={task}
        placeholder="Digite uma tarefa"
        onChangeText={(text) => setTask(text)}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={addTask}>
        <Ionicons name="add" size={16} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#e2e2e2',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
  },

  button: {
    padding: 8,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#17b978',
  },
});
