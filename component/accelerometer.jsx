import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";

// npx expo install expo-sensors

export default function MyAccelerometer() {
  const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const subscription = Accelerometer.addListener(setData);
    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text>x: {x}</Text>
      <Text>y: {y}</Text>
      <Text>z: {z}</Text>
      <View style={styles.button1}>
        <Button
          color="white"
          title="Slow"
          onPress={() => Accelerometer.setUpdateInterval(2000)}
        />
      </View>
      <View style={styles.button2}>
        <Button
          color="white"
          title="Fast"
          onPress={() => Accelerometer.setUpdateInterval(50)}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    backgroundColor: "navy",
    color: "white",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  button2: {
    backgroundColor: "navy",
    color: "white",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
});
