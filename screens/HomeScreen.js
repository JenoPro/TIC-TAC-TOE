import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SinglePlayer")}
      >
        <Text style={styles.buttonText}>Single Player</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("MultiPlayer")}
      >
        <Text style={styles.buttonText}>Multiplayer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
  },
  title: { fontSize: 32, fontWeight: "bold", color: "#fff", marginBottom: 40 },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    width: "80%",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: { color: "white", fontSize: 20, fontWeight: "bold" },
});