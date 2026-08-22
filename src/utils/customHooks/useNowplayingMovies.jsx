import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlaying } from '../store/slice/movieSlice';
import { options } from '../constants';

const useNowplayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
        const json = await data.json();
        dispatch(addNowPlaying(json.results))
    }
    useEffect(() => {
        nowPlayingMovies();
    }, [])
}

export default useNowplayingMovies
