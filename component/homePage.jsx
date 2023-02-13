import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.button1}>
        <Button
          color="white"
          title="Movies Page"
          onPress={() => {
            navigation.navigate("moviesSite");
          }}
        />
      </View>

      <View style={styles.button2}>
        <Button
          color="white"
          title="Slider Page"
          onPress={() => {
            navigation.navigate("slider");
          }}
        />
      </View>

      <View style={styles.button4}>
        <Button
          color="white"
          title="Web Browser Page"
          onPress={() => {
            navigation.navigate("webbrowser");
          }}
        />
      </View>

      <View style={styles.button5}>
        <Button
          color="white"
          title="Battery Page"
          onPress={() => {
            navigation.navigate("battery");
          }}
        />
      </View>

      <View style={styles.button6}>
        <Button
          color="white"
          title="Accelerometer Page"
          onPress={() => {
            navigation.navigate("accelerometer");
          }}
        />
      </View>

      <View style={styles.button8}>
        <Button
          color="white"
          title="Camera Page"
          onPress={() => {
            navigation.navigate("camera");
          }}
        />
      </View>

      <View style={styles.button9}>
        <Button
          color="white"
          title="Image Picker"
          onPress={() => {
            navigation.navigate("imgPicker");
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    padding: 30,
    marginTop: 0,
  },
  button1: {
    backgroundColor: "navy",
    color: "white",
    borderRadius: 10,
    padding: 10,
  },
  button2: {
    backgroundColor: "navy",
    color: "white",
    borderRadius: 10,
    padding: 10,
  },
  button4: {
    backgroundColor: "navy",
    color: "white",
    borderRadius: 10,
    padding: 10,
  },
  button5: {
    backgroundColor: "navy",
    color: "white",
    borderRadius: 10,
    padding: 10,
  },
  button6: {
    backgroundColor: "navy",
    color: "white",
    borderRadius: 10,
    padding: 10,
  },
  button7: {
    backgroundColor: "navy",
    color: "white",
    borderRadius: 10,
    padding: 10,
  },
  button8: {
    backgroundColor: "navy",
    color: "white",
    borderRadius: 10,
    padding: 10,
  },
  button9: {
    backgroundColor: "navy",
    color: "white",
    borderRadius: 10,
    padding: 10,
  },
});
