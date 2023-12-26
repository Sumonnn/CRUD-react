import React, { useContext, useState } from 'react'
import { UserContext } from '../context/AppContext'
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const Edit = () => {

    const { showPassword, users, setUsers, setshowPassword } = useContext(UserContext);

    const Navigate = useNavigate();

    const { title } = useParams();
    const index = users.findIndex((u) => u.username == title)

    const [formData, setformData] = useState({
        username: users[index].username,
        password: users[index].password,
    });

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
        if (
            formData.username.trim().length <= 4 &&
            formData.password.trim().length <= 4
        ) {
            toast.error("inputs must be atleast 4 characters long");
            return;
        }

        const copyusers = [...users];
        copyusers[index] = formData;
        setUsers(copyusers);

        // setUsers([...users, user])

        localStorage.setItem("users", JSON.stringify(copyusers));
        toast.success("User successfully Updated!");

        Navigate('/show')

    }



    return (
        <form onSubmit={submitHandler} className="flex h-[80vh] flex-col justify-center w-full gap-y-4 mt-6 items-center">
            <h2 className='text-2xl w-1/4 text-zinc-800 font-semibold capitalize'>User Updated</h2>
            <label className='w-1/4'>
                <input
                    type="text"
                    placeholder='Username'
                    name='username'
                    value={formData.username}
                    onChange={changeHandler}
                    className="bg-slate-200 rounded-[0.75rem] w-full p-[12px] text-zinc-800"
                />
            </label>
            {/* password input */}
            <label className='w-1/4 relative'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='XXXXXX'
                    name='password'
                    value={formData.password}
                    onChange={changeHandler}
                    className="bg-slate-200 rounded-[0.75rem] w-full p-[12px] text-zinc-800"
                />
                <span onClick={() => setshowPassword(!showPassword)}
                    className="absolute right-3 text-xl top-[15px] cursor-pointer"
                >
                    {
                        showPassword ? (<VscEye />) : (<VscEyeClosed />)
                    }
                </span>
            </label>
            <button className='bg-zinc-200 w-1/4 py-2 text-xl rounded-lg'>Update</button>
            <span className='w-1/2 border border-b-zinc-400'></span>
        </form>
    )
}

export default Edit