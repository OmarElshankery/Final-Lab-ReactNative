import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";
import { openBrowserAsync } from "expo-web-browser";

export default function WebBrowser() {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          color="white"
          title="Open Browser"
          onPress={() =>
            openBrowserAsync("https://web.facebook.com/omar.elshakankery")
          }
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
  button: {
    backgroundColor: "navy",
    color: "white",
    borderRadius: 10,
    padding: 10,
  },
});
