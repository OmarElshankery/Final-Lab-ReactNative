import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const imgPath = "https://image.tmdb.org/t/p/w500/";

export default function MovieDetails({ navigation, route }) {
  const id = route.params.moveid;

  const [movies, setMovies] = useState([]);
  getMovie();
  function getMovie() {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?&api_key=9813ce01a72ca1bd2ae25f091898b1c7&language=en-US`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data);
      });
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.imgstyle}
          source={{
            width: 300,
            height: 300,
            uri: imgPath + movies.poster_path,
          }}
        />

        <Text
          style={{
            padding: 10,
            textAlign: "center",
            letterSpacing: 1.2,
            color: "grey",
            fontSize: 25,
            borderWidth: 5,
            borderColor: "navy",
            borderRadius: 10,
            width: "70%",
            fontWeight: "800",
            fontFamily: "Cochin",
            marginTop: 20,
            marginLeft: 65,
          }}
        >
          {movies.title}
        </Text>

        <Text
          style={{
            padding: 10,
            textAlign: "center",
            letterSpacing: 1.2,
            color: "grey",
            fontSize: 15,
            fontWeight: "800",
            fontFamily: "Cochin",
            marginTop: 20,
          }}
        >
          {movies.overview}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imgstyle: {
    marginTop: 55,
    marginLeft: 60,
  },
});
