import React, { useEffect, useState } from 'react'

import movieDb from '../api/movieDB'
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface'

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [moviesInCinema, setMoviesInCinema] = useState<Movie[]>([]);


    const getMovies = async () => {

        const resp = await movieDb.get<MovieDBNowPlaying>('/now_playing');

        setMoviesInCinema(resp.data.results);

        setIsLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, [])

    return {
        moviesInCinema,
        isLoading
    }
}
