import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import SinglePlayerScreen from "./screens/SinglePlayerScreen";
import MultiPlayerScreen from "./screens/MultiPlayerScreen";
import TicTacToeGame from "./screens/TicTacToeGame";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SinglePlayer" component={SinglePlayerScreen} />
        <Stack.Screen name="MultiPlayer" component={MultiPlayerScreen} />
        <Stack.Screen name="TicTacToeGame" component={TicTacToeGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}