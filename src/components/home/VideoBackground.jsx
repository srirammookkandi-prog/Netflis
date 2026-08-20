import { useEffect } from 'react'
import { options } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../../utils/store/slice/movieSlice';

const VideoBackground = () => {
    const dispatch = useDispatch()
    const trailorVideo = useSelector(store => store.movies?.trailorVideo);

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/969681/videos?language=en-US', options);
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type == "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => { getMovieVideos() }, []);


    return (
        <div>
            <iframe width="560"
                height="315"
                src={"https://www.youtube.com/embed/" + trailorVideo?.key}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
        </div>
    )
}

export default VideoBackground
