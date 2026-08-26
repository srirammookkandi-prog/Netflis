import { useNavigate } from 'react-router-dom'
import netflis from '../../assests/netflis.png'
import { ChevronLeft } from 'lucide-react'

const MoviePageHeader = () => {
    const navigate = useNavigate();
    const handleClickToHome = () => {
        navigate("/home");
    }
    return (
        <div className='px-6 py-6 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
            <img className='w-44 ' src={netflis} alt='Logo'></img>
            <div onClick={handleClickToHome} className='flex text-3xl '>
                <ChevronLeft size={40} strokeWidth={1.8} className='text-red-600' />
                <span className='font-bold text-red-600 '>Home</span>
            </div>
        </div>
    )
}

export default MoviePageHeader
