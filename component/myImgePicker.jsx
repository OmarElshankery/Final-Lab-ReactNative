import React, { useState, useEffect } from "react";
import { StyleSheet, Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function MyImgePicker() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.button}>
        <Button
          color="white"
          title="Pick Image From Camera Roll"
          onPress={pickImage}
        />
      </View>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "navy",
    color: "white",
    borderRadius: 10,
    padding: 10,
  },
});
