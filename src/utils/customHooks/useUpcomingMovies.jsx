import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUpcoming } from '../store/slice/movieSlice';
import { options } from '../constants';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const UpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options)
        const json = await data.json();
        dispatch(addUpcoming(json.results))
    }
    useEffect(() => {
        UpcomingMovies();
    }, [])
}

export default useUpcomingMovies
