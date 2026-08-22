import Header from './Header'
import useNowplayingMovies from "../../utils/customHooks/useNowplayingMovies"
import MainContainer from '../home/PrimaryContainer/MainContainer';
import SecondaryContainer from './secondaryContainer/SecondaryContainer';
import useTopRatedMovies from '../../utils/customHooks/useTopRatedMovies';

const Browse = () => {

  useNowplayingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}
export default Browse