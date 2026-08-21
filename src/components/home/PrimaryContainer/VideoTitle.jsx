import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
            <h1 className='text-5xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-[40%]'>{overview}</p>
            <div className=''>
                <button className='bg-white text-black p-2 px-8 m-2 text-xl bg-opacity-80 rounded-lg hover:bg-opacity-50'>
                    ▶️ Play
                </button>
                <button className='bg-gray-500 text-white p-2 px-8 m-2 text-xl bg-opacity-50 rounded-lg '>
                    More info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle
