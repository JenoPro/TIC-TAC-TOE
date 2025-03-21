import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function MultiPlayerScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Multiplayer</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("TicTacToeGame", {
            mode: "multiplayer",
          })
        }
      >
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back</Text>
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
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 40 },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    width: "80%",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: "gray",
    padding: 15,
    width: "80%",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
});