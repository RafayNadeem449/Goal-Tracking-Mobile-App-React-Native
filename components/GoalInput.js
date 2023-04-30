import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(event) {
    setEnteredGoal(event);
  }

  function addGoalHandler()
  {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button
          style={styles.button}
          title="Add Goal"
          onPress={addGoalHandler}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },

  textInput: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    width: "80%",
    marginRight: 8,
    padding: 8,
  },

  button: {
    backgroundColor: "red",
    color: "red",
  },
});
