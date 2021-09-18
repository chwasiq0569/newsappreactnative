import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Searchbar from "./app/components/Searchbar";
import Screen from "./app/components/Screen";
import BoxCard from "./app/components/BoxCard";

export default function App() {
  return (
    <Screen>
      <BoxCard />
    </Screen>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
