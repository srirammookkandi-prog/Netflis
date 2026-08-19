import netflis from '../../assests/netflis.png'
const AuthHeader = () => {

    return (
        <div className='absolute px-8 py-6 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
            <img className='w-44 ' src={netflis} alt='Logo'></img>
        </div>
    )
}

export default AuthHeader;