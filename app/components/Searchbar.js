import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const Searchbar = () => {
  return <TextInput placeholder="Search" />;
};

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 30,
  },
});

export default Searchbar;
