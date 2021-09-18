import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Searchbar from "./app/components/Searchbar";
import Screen from "./app/components/Screen";
import BoxCard from "./app/components/BoxCard";
import FeaturedNews from "./app/components/FeaturedNews";

export default function App() {
  return (
    <Screen>
      <FeaturedNews />
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
