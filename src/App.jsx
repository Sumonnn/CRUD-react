import { useState } from "react"
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Create from './components/Create';
import Show from './components/Show';
import Details from './components/Details';



function App() {

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create setUsers={setUsers} users={users} />} />
        <Route path="/show" element={<Show users={users} setUsers={setUsers} />} />
        <Route path="/show/details/:title" element={<Details />} />
      </Routes>
    </>
  )
}

export default App
