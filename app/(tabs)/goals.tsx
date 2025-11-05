import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function GoalsScreen() {
  const [goal, setGoal] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Goal 🎯</Text>

      <TouchableOpacity
        style={[
          styles.option,
          goal === "lose" && { backgroundColor: "#FF5252" },
        ]}
        onPress={() => setGoal("lose")}
      >
        <Text style={styles.optionText}>Lose Weight</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          goal === "maintain" && { backgroundColor: "#ff9c07ff" },
        ]}
        onPress={() => setGoal("maintain")}
      >
        <Text style={styles.optionText}>Maintain Weight</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          goal === "gain" && { backgroundColor: "#4CAF50" },
        ]}
        onPress={() => setGoal("gain")}
      >
        <Text style={styles.optionText}>Gain Weight</Text>
      </TouchableOpacity>

      {goal ? (
        <View style={styles.summaryBox}>
          <Text style={styles.summaryTitle}>Your Selected Goal:</Text>
          <Text style={styles.summaryText}>
            {goal === "lose"
              ? "Focus on a calorie deficit with nutritious meals."
              : goal === "maintain"
              ? "Stay consistent with a balanced meal plan."
              : "Increase protein and calorie intake to gain healthy weight."}
          </Text>
        </View>
      ) : (
        <Text style={styles.instruction}>Select a goal to continue.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    width: "80%",
    padding: 15,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  optionText: {
    fontSize: 18,
    color: "#333",
  },
  summaryBox: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "90%",
    elevation: 2,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  summaryText: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  instruction: {
    fontSize: 16,
    color: "#777",
    marginTop: 20,
  },
});
