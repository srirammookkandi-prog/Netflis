import { onAuthStateChanged, signOut } from "firebase/auth";
import netflis from '../../assests/netflis.png'
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/store/slice/userSlice";
import { useEffect } from "react";
import { togglegpt } from "../../utils/store/slice/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)
  const showGpt = useSelector(store => store.gptSearch.showGpt);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser);
      navigate("/login")
    }).catch((error) => {
      navigate("/error")
    });

  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/home")
      } else {
        dispatch(removeUser());
        navigate("/login")
      }
    });
    return () => unsubscribe();
  }, [])

  const handleToggle = () => {
    dispatch(togglegpt());
  }

  return (
    <div className='absolute px-6 py-6 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
      <img className='w-44 ' src={netflis} alt='Logo'></img>
      {user && <div className='flex m-2'>
        <button className='mx-4 px-4 bg-red-600 font-bold text-white rounded-3xl' onClick={handleToggle}>{showGpt ? "HomePage" : "AI Suggestion"}</button>
        <img alt='profile' src={user?.photoURL} className='w-10 h-10 mx-2'></img>
        <button onClick={handleSignOut} className='mx-4 px-4 bg-red-600 font-bold text-white rounded-3xl'>Sign out</button>
      </div>}
    </div>
  )
}

export default Header;