import { useState, useRef } from 'react'
import Header from '../home/Header'
import { checkValidateData } from '../../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../utils/store/slice/userSlice';
import { userProfile } from '../../utils/constants';


const Login = () => {

  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignedIn(!isSignedIn);
  }

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidateData(name.current?.value || "", email.current.value, password.current.value, isSignedIn);
    setErrorMessage(message);
    if (message) return;
    if (!isSignedIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current?.value, photoURL: userProfile
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
            navigate("/home");
          }).catch((error) => {
            setErrorMessage(error.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Invalid Email-Id or Password");
        });

    }

  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ea534f76-b87f-4720-9605-cb29cfd9fefe/web/IN-en-20260810-TRIFECTA-perspective_5a83c581-2878-466b-87a0-19d0bf50f4bc_large.jpg" alt=""></img>
      </div>
      <div className='absolute mx-auto right-0 left-0 my-32 p-12 bg-black w-3/12 bg-opacity-80'>
        <form onSubmit={(e) => e.preventDefault()} className='text-white font-semibold'>

          <h1 className=' font-bold text-3xl text-red-700 py-4'>
            {isSignedIn ? "SIGN IN" : "SIGN UP"}
          </h1>

          {!isSignedIn &&
            <input
              ref={name}
              type='text'
              placeholder='Enter Name'
              className='p-3 my-4 w-full bg-gray-700 rounded-lg'>
            </input>
          }

          <input
            ref={email}
            type='email'
            placeholder='Enter Email'
            className='p-3 my-4 w-full bg-gray-700 rounded-lg'>
          </input>

          <input
            ref={password}
            type='password'
            placeholder='Enter Password'
            className='p-3 my-4 w-full bg-gray-700 rounded-lg'>
          </input>

          <p className='text-red-700 font-semibold p-2 text-lg'>
            {errorMessage}
          </p>

          <button
            className='p-3 bg-red-700  hover:bg-red-800 font-bold text-white w-full my-4 rounded-lg'
            onClick={handleButtonClick}>
            {isSignedIn ? "Sign In" : "Sign Up"}
          </button>

          <p className='font-bold text-white cursor-pointer  hover:text-red-700'
            onClick={toggleSignInForm}>
            {isSignedIn ? "New user register? Sign up" : " Already a User? Sign In"}
          </p>

        </form>
      </div>
    </div>
  )
}
export default Login