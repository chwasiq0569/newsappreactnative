import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Title from "./Title";
import SubTitle from "./SubTitle";

const BoxCard = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={require("../../assets/news.jpg")} style={styles.image} />
      <View style={styles.contentContainer}>
        <Title>Some Title</Title>
        <SubTitle>Some Description</SubTitle>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 200,
  },
  contentContainer: {
    padding: 5,
  },
});

export default BoxCard;
