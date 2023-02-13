import { ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./component/homePage";
import MoviesSite from "./component/moviesSite";
import MovieDetails from "./component/movieDetails";
import MySlider from "./component/slider";
import WebBrowser from "./component/webBrowser";
import MyBattery from "./component/battery";
import MyAccelerometer from "./component/accelerometer";
import MyCamera from "./component/MyCamera";
import MyImgePicker from "./component/myImgePicker";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="moviesSite" component={MoviesSite} />
        <Stack.Screen name="movieDetails" component={MovieDetails} />
        <Stack.Screen name="slider" component={MySlider} />
        <Stack.Screen name="webbrowser" component={WebBrowser} />
        <Stack.Screen name="battery" component={MyBattery} />
        <Stack.Screen name="accelerometer" component={MyAccelerometer} />
        <Stack.Screen name="camera" component={MyCamera} />
        <Stack.Screen name="imgPicker" component={MyImgePicker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
