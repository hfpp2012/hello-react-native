import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
};

export default Sandbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#ddd",
    flexDirection: "row",
  },
  boxOne: {
    flex: 2,
    backgroundColor: "violet",
    padding: 10,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: "gold",
    padding: 10,
  },
  boxThree: {
    flex: 1,
    backgroundColor: "coral",
    padding: 10,
  },
  boxFour: {
    flex: 1,
    backgroundColor: "skyblue",
    padding: 10,
  },
});
