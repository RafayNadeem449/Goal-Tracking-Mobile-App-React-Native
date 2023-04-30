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
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

 

  function addGoalHandler(enteredGoal) {
    // console.log(enteredGoal);
    setCourseGoals((current) => [
      ...current,
      { text: enteredGoal, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <Text style={styles.headerText}>Rafay's Goal Tracking App</Text>
      <GoalInput onAddGoal = {addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <>
               <GoalItem itemData={itemData}/>
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

  
  goalsContainer: {
    flex: 1,
  },
 
});
