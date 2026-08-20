import Header from '../home/Header'
import useNowplayingMovies from "../../utils/customHooks/useNowplayingMovies"
import MainContainer from '../home/MainContainer';
import SecondaryContainer from '../home/SecondaryContainer';

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