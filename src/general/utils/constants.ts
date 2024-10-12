import {Item} from "../interfaces.ts";
import ActiveIcon from "../../icons/sidebar/active.svg";
import ContactsIcon from "../../icons/sidebar/contacts.svg";
import GroupsIcon from "../../icons/sidebar/groups.svg";
import StudentsIcon from "../../icons/sidebar/students.svg";
import LecturersIcon from "../../icons/sidebar/lecturers.svg";


export const sidebarItems:Item[] = [
    {
        title: "Active",
        Icon: ActiveIcon,
        route: "active"
    },
    {
        title: "Contacts",
        Icon: ContactsIcon,
        route: "contacts"
    },
    {
        title: "Groups",
        Icon: GroupsIcon,
        route: "groups"
    },
    {
        title: "Students",
        Icon: StudentsIcon,
        route: "students"
    },
    {
        title: "Lecturers",
        Icon: LecturersIcon,
        route: "lecturers"
    }
];

