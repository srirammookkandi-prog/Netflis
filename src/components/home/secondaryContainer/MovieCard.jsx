import { CDN_IMG_URL } from "../../../utils/constants"
const MovieCard = ({ posterPath }) => {
    return (
        <div className="w-48 px-2">
            <img alt='moviecard' src={CDN_IMG_URL + posterPath}></img>
        </div>
    )
}

export default MovieCard

