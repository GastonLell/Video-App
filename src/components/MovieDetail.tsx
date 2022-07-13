import React from 'react';
import { Text, View, FlatList } from 'react-native'
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import CastItem from './CastItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

const MovieDetail = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* details */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star-outline" size={16} color="grey"></Icon>
                    <Text>{movieFull.vote_average}</Text>
                    <Text style={{ marginLeft: 5 }}>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>
            

            {/* history */}

            <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                Historia
            </Text>

            <Text style={{ fontSize: 16 }}>
                {movieFull.overview}
            </Text>

            {/* budget */}

            <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                Presupuesto
            </Text>

            <Text style={{ fontSize: 16 }}>
                {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
            </Text>
            </View>
            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20 }}>
                    Actores
                </Text>
                <FlatList data={cast} 
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) =>  <CastItem actor={item}/> }
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop: 10, height: 70}}
                />
            </View>
        </>
    )
}

export default MovieDetail