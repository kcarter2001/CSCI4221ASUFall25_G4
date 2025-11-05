import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile 👤</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your weight (lbs)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      {name && age && weight ? (
        <View style={styles.summary}>
          <Text style={styles.summaryText}>Name: {name}</Text>
          <Text style={styles.summaryText}>Age: {age}</Text>
          <Text style={styles.summaryText}>Weight: {weight} lbs</Text>
        </View>
      ) : (
        <Text style={styles.instruction}>
          Fill in your information above 👆
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  summary: {
    backgroundColor: "#E8F5E9",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  summaryText: {
    fontSize: 16,
    color: "#333",
  },
  instruction: {
    textAlign: "center",
    color: "#777",
    marginTop: 10,
  },
});
