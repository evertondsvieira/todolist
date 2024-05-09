import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export const NotFound = () => {
  const { height } = Dimensions.get('window')

  return (
    <View style={[styles.container, { height: height * 0.8 }]}>
      <Image
        style={{ width: 200, height: 200, resizeMode: "cover" }}
        source={require(`../../../assets/sleep.gif`)}
        alt="image not found"
      />
      <Text style={styles.text}>Nenhuma tarefa foi encontrada...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center", 
    justifyContent: "center"
  },

  text: {
    fontSize: 18
  }
})
