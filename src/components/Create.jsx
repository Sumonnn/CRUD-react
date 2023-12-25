import React, { useContext } from 'react'
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { UserContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Create = () => {

    const { setformData, formData, changeHandler, setshowPassword, showPassword, users, setUsers } = useContext(UserContext);
    const Navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();
        const copyUser = [...users, formData];
        setUsers(copyUser)
        localStorage.setItem('users', JSON.stringify(copyUser))
        toast.success('User Register Successfully')
        setformData({
            username: '',
            password: '',
        })
        Navigate('/show')
    }

    return (
        <form onSubmit={submitHandler} className="flex h-[80vh] flex-col justify-center w-full gap-y-4 mt-6 items-center">
            <h2 className='text-2xl w-1/4 text-zinc-800 font-semibold capitalize'>User Register</h2>
            <label className='w-1/4'>
                <input
                    type="text"
                    placeholder='Username'
                    name='username'
                    onChange={changeHandler}
                    value={formData.username}
                    className="bg-slate-200 rounded-[0.75rem] w-full p-[12px] text-zinc-800"
                />
            </label>
            {/* password input */}
            <label className='w-1/4 relative'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='XXXXXX'
                    name='password'
                    onChange={changeHandler}
                    value={formData.password}
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
            <button className='bg-zinc-200 w-1/4 py-2 text-xl rounded-lg'>Register</button>
            <span className='w-1/2 border border-b-zinc-400'></span>
        </form>
    )
}

export default Create