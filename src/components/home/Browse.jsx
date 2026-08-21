import Header from './Header'
import useNowplayingMovies from "../../utils/customHooks/useNowplayingMovies"
import MainContainer from '../home/MainContainer';
import SecondaryContainer from './secondaryContainer/SecondaryContainer';

const Browse = () => {

  useNowplayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}
export default Browse