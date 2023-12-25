import React, { useContext } from 'react'
import User from './User'
import { UserContext } from '../context/AppContext';


const Show = () => {

    const { users, deleteHandler } = useContext(UserContext);



    return (
        <div className='w-full h-[80vh] flex-col flex items-center justify-center'>
            {
                users.map((user, index) => {
                    return <User user={user} deleteHandler={deleteHandler} key={index} index={index} />
                })
            }
        </div>
    )
}

export default Show