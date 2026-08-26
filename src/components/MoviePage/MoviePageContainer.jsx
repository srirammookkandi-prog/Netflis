import { useParams } from "react-router-dom"
import useMovieDetails from "../../utils/customHooks/useMovieDetails"
import { CDN_IMG_URL } from "../../utils/constants"

const MoviePageContainer = () => {
    const { id } = useParams()
    const { data, video } = useMovieDetails(id);
    console.log(data);
    console.log(video)
    const { original_title, poster_path, overview, runtime, } = data
    return (
        <div className="flex mx-6">
            <img className="w-32" src={CDN_IMG_URL + poster_path} />
            <div className=" bg-black opacity-80 w-screen mx-6">
                <h1 className=" text-3xl text-white font-bold m-4 ">{original_title}</h1>
                <p className="text-white mx-4 my-2 text-wrap">{overview}</p>
                <div className="flex mx-2">
                    <span className="text-red-600 font-bold text-sm mx-2">Watchtime: {runtime}mins</span>
                    <span className="text-red-600"></span>
                </div>

            </div>
        </div>
    )
}

export default MoviePageContainer
