import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, View } from "react-native";
import * as Battery from "expo-battery";
import { useEffect, useState } from "react";

export default function MyBattery() {
  const [isAvailable, setIsAvailable] = useState(false);
  const [batteryInfo, setBatteryInfo] = useState(undefined);

  useEffect(() => {
    async function checkAvailability() {
      const isBatteryAvailable = await Battery.isAvailableAsync();
      setIsAvailable(isBatteryAvailable);
    }
    checkAvailability();
  }, []);

  const showBatteryInfo = () => {
    console.log(batteryInfo);
    return (
      <View>
        <Text style={styles.mode}>
          Low Power Mode: {batteryInfo.lowPowerMode ? "Yes" : "No"}
        </Text>
        <Text style={styles.level}>
          Battery Level: {batteryInfo.batteryLevel * 100}%
        </Text>
        <Text style={styles.state}>
          Battery State: {batteryInfo.batteryState}
        </Text>
      </View>
    );
  };

  const loadBatteryInfo = async () => {
    let batteryInfoLoaded = await Battery.getPowerStateAsync();
    setBatteryInfo(batteryInfoLoaded);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.details}>
        {isAvailable ? "Battery Details: " : "Battery info unavailable"}
      </Text>
      {batteryInfo ? (
        showBatteryInfo()
      ) : (
        <Text style={styles.info}>Battery info not loaded</Text>
      )}
      {isAvailable && (
        <View style={styles.button}>
          <Button
            color="white"
            title="Load Battery Info"
            onPress={loadBatteryInfo}
          />
        </View>
      )}
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
  button: {
    backgroundColor: "navy",
    color: "white",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  details: {
    fontSize: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 20,
    marginTop: 20,
    color: "red",
  },
  mode: {
    fontSize: 20,
    marginTop: 20,
  },
  level: {
    fontSize: 20,
    marginTop: 20,
  },
  state: { fontSize: 20, marginTop: 20 },
});
