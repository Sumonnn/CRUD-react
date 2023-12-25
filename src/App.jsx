import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Create from './components/Create';
import Show from './components/Show';
import Details from './components/Details';



function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/show" element={<Show />} />
        <Route path="/show/details/:title" element={<Details />} />
      </Routes>
    </>
  )
}

export default App
