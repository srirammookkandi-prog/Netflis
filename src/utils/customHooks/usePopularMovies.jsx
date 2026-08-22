import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addPopular } from '../store/slice/movieSlice';
import { options } from '../constants';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', options)
        const json = await data.json();
        dispatch(addPopular(json.results))
    }
    useEffect(() => {
        popularMovies();
    }, [])
}

export default usePopularMovies
