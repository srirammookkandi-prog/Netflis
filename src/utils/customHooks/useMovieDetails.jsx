import { useEffect, useState } from "react";
import { options } from "../constants";

const useMovieDetails = (id) => {
    const [data, setData] = useState([]);
    const [video, setVideo] = useState([]);

    useEffect(() => { getMovieVideos() }, []);
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US%27', options);
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type == "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        setVideo(trailer);
    }
    useEffect(() => { getMovieDetails() }, []);
    const getMovieDetails = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + id + '?language=en-US%27', options);
        const json = await data.json();
        setData(json);
    }
    return { data, video };
}
export default useMovieDetails
