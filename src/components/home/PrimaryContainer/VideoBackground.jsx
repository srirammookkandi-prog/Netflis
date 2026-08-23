import { useSelector } from 'react-redux';
import useMovieTrailer from '../../../utils/customHooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    useMovieTrailer(movieId);
    return (
        <div className='w-screen'>
            <iframe
                className='w-screen aspect-video'
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}&subtitle=0`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay-repeat; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
            <div className="absolute inset-0 z-5 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>
        </div>
    )
}

export default VideoBackground
