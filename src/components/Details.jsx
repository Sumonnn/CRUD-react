import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Details = () => {

    const Navigate = useNavigate();
    const { title } = useParams();
    console.log(title);

    function clickHandler() {
        Navigate(-1);
    }

    return (
        <div className='flex justify-center flex-col items-center gap-8 w-full h-[80vh] '>
            <p className='text-lg'> 👋 Hello ji {title}</p>
            <button
                className='text-xl font-extrabold border border-black px-5 py-2'
                onClick={clickHandler}
            >Go Back</button>
        </div>
    )
}

export default Details