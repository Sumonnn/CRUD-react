import React from 'react'

const User = ({ deleteHandler, user, index }) => {
    return (
        <div className='flex hover:bg-slate-200 bg-slate-300 w-1/3 px-5 rounded-xl py-3 mt-1 justify-between'>
            <p className='text-xl text-zinc-800'>{user.username}</p>
            <div className='flex gap-6'>
                <span className='cursor-pointer'>✏</span>
                <span onClick={() => deleteHandler(index)} className='cursor-pointer'>❌</span>
            </div>
        </div>
    )
}

export default User