import { createHashRouter, RouterProvider } from 'react-router-dom';
import Login from '../authentication/Login';
import Browse from '../netflis_GPT/Browse';

const Body = () => {

    const approuter = createHashRouter([
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/home",
            element: <Browse />
        }
    ])
    return (
        <div><RouterProvider router={approuter} /></div>
    )
}

export default Body