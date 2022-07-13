import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}
const CardMovie = ({ movie, height = 420, width = 300 }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    const {navigate} = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigate('DetailScreen', movie)}
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal: 8,
                paddingBottom: 10,
                paddingHorizontal: 5
            }}
        >
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 15,
    },
    image: {
        flex: 1,
        borderRadius: 18,
    }
})

export default CardMovie;