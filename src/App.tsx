import './App.css'
import Header from "./general/components/header/Header.tsx";
import Sidebar from "./general/components/sidebar/Sidebar.tsx";
import {Route, Routes} from "react-router-dom";
import Active from "./modules/active/presentation/pages/Active.tsx";
import Contacts from "./modules/contacts/presentation/pages/Contacts.tsx";
import Groups from "./modules/groups/presentation/pages/Groups.tsx";
import Students from "./modules/students/presentation/pages/Students.tsx";
import Lecturers from "./modules/lecturers/presentation/pages/Lecturers.tsx";
import Subheader from "./general/components/subheader/Subheader.tsx";

function App() {

  return (
      <div>
          <Header/>
          <div className={"contentBody"}>
              <Sidebar/>
              <Subheader>
                  <Routes>
                      <Route path={"/active"} element={<Active/>}/>
                      <Route path={"/contacts"} element={<Contacts/>}/>
                      <Route path={"/groups"} element={<Groups/>}/>
                      <Route path={"/students"} element={<Students/>}/>
                      <Route path={"/lecturers"} element={<Lecturers/>}/>
                  </Routes>
              </Subheader>
          </div>

      </div>

  )
}

export default App
