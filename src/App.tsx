import './App.css'
import Header from "./general/components/header/Header.tsx";
import Sidebar from "./general/components/sidebar/Sidebar.tsx";
import {Routes} from "react-router-dom";

function App() {

  return (
      <div>
          <Header/>
          <Sidebar/>
          <Routes>

          </Routes>
      </div>

  )
}

export default App
