import React from 'react';
import { View, ActivityIndicator, Dimensions, FlatList, Text, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import CardMovie from '../components/CardMovie';
import HorizontalSlider from '../components/HorizontalSlider';
import { useMovies } from '../hooks/useMovies';
import { Movie } from '../interfaces/movieInterface';

const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();
  const { moviesInCinema, isLoading } = useMovies();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        {/* Carousel principal */}
        <View style={{ height: 440 }}>
          <Carousel
            data={moviesInCinema}
            renderItem={({ item }: any) => <CardMovie movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>

        {/* Peliculas populares */}

       <HorizontalSlider title="En cine" movies={moviesInCinema}/>
    
       <HorizontalSlider  movies={moviesInCinema}/>

       <HorizontalSlider title="Más populares" movies={moviesInCinema}/>
    
      </View>
    </ScrollView>
  )
}

export default HomeScreen;