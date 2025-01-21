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

export const Notifications:Notice[] = [
    {
        entityId: 1,
        notificationData: {
            notificationId: 1,
            recipientId: 3,
            scheduledTime: "Fri, 12.02.2025 at 12:00",
            entityName: "Entity Name",
            notificationText: "remind me"
        }
    },
    {
        entityId: 2,
        notificationData: {
            notificationId: 2,
            recipientId: 4,
            scheduledTime: "Fri, 12.02.2025 at 12:00",
            entityName: "Entity Name",
            notificationText: "remind me please"
        }
    },
    {
        entityId: 3,
        notificationData: {
            notificationId: 3,
            recipientId: 3,
            scheduledTime: "Fri, 15.02.2025 at 17:00",
            entityName: "Entity Name",
            notificationText: "remind me now"
        }
    }
]

