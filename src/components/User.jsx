import React from 'react'

const User = ({ deleteHandler, user, index }) => {
    return (
        <div className='flex bg-slate-600 w-1/3 px-10 py-3 mt-1 justify-between'>
            <p className='text-xl text-zinc-100'>{user.username}</p>
            <div className='flex gap-8'>
                <span className='cursor-pointer'>✏</span>
                <span onClick={() => deleteHandler(index)} className='cursor-pointer'>❌</span>
            </div>
        </div>
    )
}

export default User