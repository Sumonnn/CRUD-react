import React from 'react'
import User from './User'
import toast from 'react-hot-toast';


const Show = ({ users, setUsers }) => {


    function deleteHandler(index) {
        const copyUser = [...users];
        copyUser.splice(index, 1);
        setUsers(copyUser);
        localStorage.setItem('users', JSON.stringify(copyUser))
        toast.error('Delete Successfully!!!')
    }

    return (
        <div className='w-full flex-col flex items-center justify-center'>
            {
                users.map((user, index) => {
                    return <User deleteHandler={deleteHandler} user={user} key={index} index={index} />
                })
            }
        </div>
    )
}

export default Show