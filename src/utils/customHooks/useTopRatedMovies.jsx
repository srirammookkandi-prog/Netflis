import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTopRated } from '../store/slice/movieSlice';
import { options } from '../constants';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options)
        const json = await data.json();
        dispatch(addTopRated(json.results))
    }
    useEffect(() => {
        topRatedMovies();
    }, [])
}

export default useTopRatedMovies
