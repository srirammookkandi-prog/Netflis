import Header from './Header'
import useNowplayingMovies from "../../utils/customHooks/useNowplayingMovies"
import MainContainer from '../home/PrimaryContainer/MainContainer';
import SecondaryContainer from './secondaryContainer/SecondaryContainer';
import useTopRatedMovies from '../../utils/customHooks/useTopRatedMovies';
import usePopularMovies from '../../utils/customHooks/usePopularMovies';
import useUpcomingMovies from '../../utils/customHooks/useUpcomingMovies';

const Browse = () => {

  useNowplayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}
export default Browse