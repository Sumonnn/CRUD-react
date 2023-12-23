import React from 'react'
import { NavLink } from 'react-router-dom'

const User = ({ deleteHandler, user, index }) => {
    return (
        <div className='flex hover:bg-slate-200 bg-slate-300 w-1/3 px-5 rounded-xl py-3 mt-1 justify-between'>
            <NavLink className='text-xl text-zinc-800' to={`/show/details/${user.username}`}>{user.username}</NavLink>
            <div className='flex gap-6'>
                <span className='cursor-pointer'>✏</span>
                <span onClick={() => deleteHandler(index)} className='cursor-pointer'>❌</span>
            </div>
        </div>
    )
}

export default User