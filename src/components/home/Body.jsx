import { createHashRouter, RouterProvider } from 'react-router-dom';
import Login from '../authentication/Login';
import Browse from '../netflis_GPT/Browse';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../../utils/store/slice/userSlice';

const Body = () => {

    const dispatch = useDispatch()

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

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

            } else {
                dispatch(removeUser);
            }
        });
    }, [])
    return (
        <div><RouterProvider router={approuter} /></div>
    )
}

export default Body