import Header from './Header'
import useNowplayingMovies from "../../utils/customHooks/useNowplayingMovies"
import MainContainer from '../home/PrimaryContainer/MainContainer';
import SecondaryContainer from './secondaryContainer/SecondaryContainer';
import useTopRatedMovies from '../../utils/customHooks/useTopRatedMovies';
import usePopularMovies from '../../utils/customHooks/usePopularMovies';
import useUpcomingMovies from '../../utils/customHooks/useUpcomingMovies';
import GptSearch from '../netflis_GPT/GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  useNowplayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();

  const showGpt = useSelector((store) => store.gptSearch.showGpt);

  return (
    <div>
      <Header />
      {showGpt ?
        <GptSearch /> :
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }
    </div>
  )
}
export default Browse