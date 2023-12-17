import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Create = ({ setUsers }) => {

    const [formData, setformData] = useState({
        username: '',
        password: '',
    })


    function changeHandler(event) {
        const { name, value } = event.target;
        setformData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault();

        setUsers((prev) => {
            return [
                ...prev,
                formData,
            ]
        })
        toast.success('User Register Successfully')
        setformData({
            username: '',
            password: '',
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <h2>User Register</h2>
            <input
                type="text"
                placeholder='Username'
                name='username'
                onChange={changeHandler}
                value={formData.username}
            />
            <br />
            <input
                type="password"
                placeholder='XXXXXX'
                name='password'
                onChange={changeHandler}
                value={formData.password}
            />
            <br />
            <button>Register</button>
            <hr />
        </form>
    )
}

export default Create