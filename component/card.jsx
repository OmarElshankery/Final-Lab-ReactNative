import { Avatar } from "@react-native-material/core";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.container}>
      {/* Movie Image */}
      <Avatar image={{ uri: props.imageLink }} />

      {/* Movie Name */}
      <Text style={styles.movieName}>{props.mvName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  movieName: {
    fontWeight: "bold",
    marginLeft: 10,
  },
});
