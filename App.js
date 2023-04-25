import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(event) {
    setEnteredGoal(event);
  }

  function addGoalHandler() {
    // console.log(enteredGoal);
    setCourseGoals((current) => [
      ...current,
      { text: enteredGoal, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <Text style={styles.headerText}>Rafay's Goal Tracking App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Course Goal"
          onChangeText={goalInputHandler}
        />
        <Button
          style={styles.button}
          title="Add Goal"
          onPress={addGoalHandler}
        />
      </View>

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <>
                <View style={styles.goalItem}>
                  <Text style={styles.goalText}>{itemData.item.text}</Text>
                </View>
              </>
            );
          }}
        />
      </View>

      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 100,
    paddingBottom: 200,
    backgroundColor: "#FFB4B4",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "left",
    color: "#5e0acc",
  },

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
  goalsContainer: {
    flex: 1,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    fontWeight: "bold",
  },
});
