import React from "react";
import { View, StyleSheet, Text } from "react-native";

const SubTitle = ({ children, numberOfLines = 2, size = 15 }) => {
  return (
    <Text numberOfLines={numberOfLines} style={{ fontSize: size }}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({});

export default SubTitle;
