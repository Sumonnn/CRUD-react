import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='w-full py-4 flex justify-center gap-10'>
            <NavLink className={(e) => {
                return [
                    e.isActive ? ('font-semibold') : (''),
                    e.isActive ? 'text-red-700' : ''
                ].join(' ')
            }} to='/'>Home</NavLink>
            <NavLink className={(e) => {
                return [
                    e.isActive ? ('font-semibold') : (''),
                    e.isActive ? 'text-red-700' : ''
                ].join(' ')
            }} to='/create'>Create User</NavLink>
            <NavLink className={(e) => {
                return [
                    e.isActive ? ('font-semibold') : (''),
                    e.isActive ? 'text-red-700' : ''
                ].join(' ')
            }} to='/show'>Show User</NavLink>
        </div>
    )
}

export default Nav