import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default props => (
  <View style={styles.card}>
    <Text style={styles.text}>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    
    paddingVertical: 2,
    paddingHorizontal: 15,
    minHeight: 730,
    backgroundColor:'grey'
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: "black",
    fontWeight:"bold",
  },
});