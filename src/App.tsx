import './App.css'
import Header from "./general/components/header/Header.tsx";
import Sidebar from "./general/components/sidebar/Sidebar.tsx";
import {Routes} from "react-router-dom";

function App() {

  return (
      <>
          <Header/>
          <Sidebar/>
          <Routes>

          </Routes>
      </>

  )
}

export default App
