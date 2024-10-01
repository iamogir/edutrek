import React from 'react';
import Active from "../../../modules/active/presentation/pages/Active.tsx";
import Contacts from "../../../modules/contacts/presentation/pages/Contacts.tsx";
import Students from "../../../modules/students/presentation/pages/Students.tsx";
import Lecturers from "../../../modules/lecturers/presentation/pages/Lecturers.tsx";
import Groups from "../../../modules/groups/presentation/pages/Groups.tsx";

const Sidebar = () => {
    return (
        <div>
            <Active/>
            <Contacts/>
            <Groups/>
            <Students/>
            <Lecturers/>
        </div>
    );
};

export default Sidebar;