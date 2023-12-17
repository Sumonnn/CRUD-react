import React from 'react'
import User from './User'
import toast from 'react-hot-toast';


const Show = ({ users, setUsers }) => {


    function deleteHandler(index) {
        const copyUser = [...users];
        copyUser.splice(index, 1);
        setUsers(copyUser);
        toast.error('Delete Successfully!!!')
    }

    return (
        <div>
            {
                users.map((user, index) => {
                    return <User deleteHandler={deleteHandler} user={user} key={index} index={index} />
                })
            }
        </div>
    )
}

export default Show