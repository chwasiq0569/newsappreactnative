import React from "react";
import { View, StyleSheet } from "react-native";
import Screen from "./../components/Screen";
import { AntDesign } from "@expo/vector-icons";

const NewsScreen = () => {
  return (
    <Screen>
      <AntDesign name="stepforward" size={24} color="black" />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default NewsScreen;
