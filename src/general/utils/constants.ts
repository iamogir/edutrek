import {Item} from "../interfaces.ts";
import ActiveIcon from "../../icons/sidebar/active.svg?react";
import ContactsIcon from "../../icons/sidebar/contacts.svg?react";
import GroupsIcon from "../../icons/sidebar/groups.svg?react";
import StudentsIcon from "../../icons/sidebar/students.svg?react";
import LecturersIcon from "../../icons/sidebar/lecturers.svg?react";


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

