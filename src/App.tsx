import './App.css'
import Header from "./general/components/header/Header.tsx";
import Sidebar from "./general/components/sidebar/Sidebar.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Active from "./modules/active/presentation/pages/Active.tsx";
import Contacts from "./modules/contacts/presentation/pages/Contacts.tsx";
import Groups from "./modules/groups/presentation/pages/Groups.tsx";
import Students from "./modules/students/presentation/pages/Students.tsx";
import Lecturers from "./modules/lecturers/presentation/pages/Lecturers.tsx";
import Subheader from "./general/components/subheader/Subheader.tsx";
import constStyle from "./general/utils/const.module.css"
import React from "react";

const openCloseMenuHandler = (event: React.MouseEvent<HTMLElement>) => {
    const eventTarget = event.target as Element;
    const nextSibling = eventTarget.nextElementSibling as Element;

    if (eventTarget.parentElement.classList.contains("topMenu")) {
       const parent = eventTarget.parentElement.nextSibling as Element;
           parent.classList.toggle(constStyle.open);
    }
    else {
        nextSibling.classList.toggle(constStyle.open);
    }

}

function App() {

  return (
      <div>
          <Header/>
          <div className={"contentBody"}>
              <Sidebar/>
              <Subheader openCloseMenuHandler={openCloseMenuHandler}>
                  <Routes>
                      <Route path="/" element={<Navigate to={"/active"} replace/>}/>
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
