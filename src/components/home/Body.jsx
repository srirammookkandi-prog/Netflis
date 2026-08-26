import { createHashRouter, RouterProvider } from 'react-router-dom';
import Login from '../authentication/Login';
import Browse from '../home/Browse';
import MoviePage from '../MoviePage/MoviePage';

const Body = () => {

    const approuter = createHashRouter([
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/home",
            element: <Browse />
        },
        {
            path: "/watch/:id",
            element: <MoviePage />
        }
    ])
    return (
        <div><RouterProvider router={approuter} /></div>
    )
}

export default Body