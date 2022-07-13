import { useEffect, useState } from 'react'
import movieDb from '../api/movieDB';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';

interface MovieDetails {
    isLoading: boolean,
    movieFull?: MovieFull,
    cast: Cast[],
}

export const useMovieDetails = (movieId) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async () => {
        const movieDetailPromise = await movieDb.get<MovieFull>(`/${movieId}`)
        const castPromise = await movieDb.get<CreditsResponse>(`/${movieId}/credits`)

        const [movieDetailResponse, castResponse ] = await Promise.all([movieDetailPromise, castPromise])

        setState({
            isLoading: false,
            movieFull: movieDetailResponse.data,
            cast: castResponse.data.cast
        })
    }
    
    useEffect(() => {
        getMovieDetails();
    }, [])

    return {...state}
}