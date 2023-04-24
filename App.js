import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Course Goal" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of Goals</Text>
      </View>

      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 100,
  },

  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
  },

  textInput: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    width: "90%",
    padding: 5,
  },
});
