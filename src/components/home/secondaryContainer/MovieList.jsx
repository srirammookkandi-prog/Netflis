import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className='p-4'>
            <h1 className='text-white font-bold text-2xl py-2'>
                {title}
            </h1>
            <div className='flex  overflow-auto no-scrollbar  py-2'>
                <div className='flex'>
                    {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList
