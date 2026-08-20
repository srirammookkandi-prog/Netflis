import Header from '../home/Header'
import { options } from '../../utils/constants'
import { useEffect } from 'react';
const Browse = () => {

  const nowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
    const json = await data.json();
    console.log(json.results);
  }
  useEffect(() => {
    nowPlayingMovies();
  }, [])
  return (
    <div><Header /></div>
  )
}
export default Browse