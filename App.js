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
  const [modalIsVisible, setModalIsVisible] = useState(false);

  
   function startAddGoal()
   {
    setModalIsVisible(true);
   }


  function addGoalHandler(enteredGoal) {
    // console.log(enteredGoal);
    if (enteredGoal.trim().length !== 0) {
      setCourseGoals((current) => [
        ...current,
        { text: enteredGoal, key: Math.random().toString() },
      ]);
    } else {
      console.log("No Goal Entered");
    }
  }

  function deleteGoalHandler(id) {
    setCourseGoals((current) => {
      return current.filter((goals) => goals.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Text style={styles.headerText}>Rafay's Goal Tracking App</Text>
      <Button title="Add Goal" color={"#5e0acc"} onPress={startAddGoal}/>
     <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible}/>

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <>
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.index}
                  onDelete={deleteGoalHandler}
                />
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
