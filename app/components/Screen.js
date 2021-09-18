import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";

const Screen = (props) => {
  return <View style={styles.container}>{props?.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    marginHorizontal: 15,
  },
});

export default Screen;
