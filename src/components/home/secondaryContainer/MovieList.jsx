import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

const MovieList = ({ title, movies }) => {
    return (
        <div className='p-4'>
            <h1 className='text-white font-bold text-2xl py-2'>
                {title}
            </h1>
            <div className='flex  overflow-auto no-scrollbar  py-2'>
                <div className='flex'>
                    {movies?.map(movie => <Link key={movie.id} to={"/watch/" + movie.id}> <MovieCard posterPath={movie.poster_path} /></Link>)}
                </div>
            </div>
        </div>
    )
}

export default MovieList
