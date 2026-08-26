import { CDN_IMG_URL } from "../../../utils/constants"
import { Link } from "react-router-dom"
const MovieCard = ({ posterPath }) => {
    return (
        <div className="w-48 px-2 duration-300 ease-in-out hover:scale-110 ">
            <img alt='moviecard' src={CDN_IMG_URL + posterPath}></img>
        </div>
    )
}

export default MovieCard

