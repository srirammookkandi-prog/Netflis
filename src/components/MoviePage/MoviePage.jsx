import MoviePageHeader from './MoviePageHeader'
import MoviePageContainer from './MoviePageContainer'
import { BG_IMG } from '../../utils/constants'

const MoviePage = () => {
    return (
        <div>
            <div className='absolute opacity-80 -z-10'>
                <img src={BG_IMG} alt=""></img>
            </div>
            <div>
                <MoviePageHeader />
                <MoviePageContainer />
            </div>

        </div>
    )
}

export default MoviePage
