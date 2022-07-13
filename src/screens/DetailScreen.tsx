import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import Icon from "react-native-vector-icons/Ionicons";
import { useMovieDetails } from '../hooks/useMoviesDetails';
import MovieDetail from '../components/MovieDetail';
import { TouchableOpacity } from 'react-native';
const screenHeight = Dimensions.get('screen').height;

interface Props extends NativeStackScreenProps<RootStackParams, 'DetailScreen'> { };

const DetailScreen = ({ route, navigation }: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`


  const { isLoading, movieFull, cast } = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{ uri }} style={styles.movieImage}></Image>
        </View>

      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {
        isLoading ? (
          <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
        ) : (
          <MovieDetail movieFull={movieFull!} cast={cast} />
        )
      }

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon
          name="arrow-back-outline"
          color="white"
          size={60}
        />
      </TouchableOpacity>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    // overflow: 'hidden',
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  movieImage: {
    flex: 1
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subTitle: {
    fontSize: 18,
    opacity: 0.8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 5,
    zIndex: 99,
    elevation: 9,
  }

})
export default DetailScreen;