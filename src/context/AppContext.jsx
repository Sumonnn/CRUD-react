import { createContext, useState } from "react";
import toast from "react-hot-toast";


export const UserContext = createContext();

export default function Context({ children }) {

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
    const [showPassword, setshowPassword] = useState(false);
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

    function deleteHandler(index) {
        const copyUser = [...users];
        copyUser.splice(index, 1);
        setUsers(copyUser);
        localStorage.setItem('users', JSON.stringify(copyUser))
        toast.error('Delete Successfully!!!')
    }

    const value = {
        users,
        setUsers,
        showPassword,
        setshowPassword,
        formData,
        setformData,
        changeHandler,
        deleteHandler,
    }

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

