import { useState } from "react"
import Create from "./components/Create"
import Show from "./components/Show"




function App() {

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);

  return (
    <>
      <Create
        users={users}
        setUsers={setUsers}
      />
      <Show
        users={users}
        setUsers={setUsers}
      />
    </>
  )
}

export default App
