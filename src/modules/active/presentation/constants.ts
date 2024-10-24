import DropList from "../domain/model/dropList.ts";
import {HumanCardInfo} from "../../../general/components/types.ts";

export const statusArr: DropList[] = [
    {
        id: 1,
        name: "Lead"
    },
    {
        id: 2,
        name: "In work"
    },
    {
        id: 3,
        name: "Consultation"
    },
    {
        id: 4,
        name: "Save for later"
    },
    {
        id: 5,
        name: "Student"
    },
    {
        id: 6,
        name: "Archive"
    }
]

export const groupArr: DropList[] = [
    {
        id: 1,
        name: "BP-107 Rehovot"
    },
    {
        id: 2,
        name: "BP-108 Rehovot"
    },
    {
        id: 3,
        name: "FSD-87 Rehovot"
    },
    {
        id: 4,
        name: "FSD-89 Rehovot"
    },
    {
        id: 5,
        name: "FSD-90 Rehovot"
    },
    {
        id: 6,
        name: "BP-55 Haifa"
    },
    {
        id: 7,
        name: "BP-56 Haifa"
    },
    {
        id: 8,
        name: "QA-99 Rehovot"
    },
    {
        id: 9,
        name: "QA-34 Rehovot"
    }
]

export const humansArray: HumanCardInfo[] = [
    {
        id: 1,
        name: "My Name",
        phoneNum: "+0987654321",
        whatsApp: "+0987654321",
        email: "email@email.com",
        location: "Tower",
        courseAbbreviation: "FSD",
        notify: false
    },
    {
        id: 2,
        name: "His Name",
        phoneNum: "+1234567890",
        email: "no@mail.il",
        location: "City",
        courseAbbreviation: "FSD",
        notify: false
    },
    {
        id: 3,
        name: "Her Name",
        phoneNum: "+0192837465",
        whatsApp: "+0192837465",
        email: "post@el.com",
        location: "Earth",
        courseAbbreviation: "QA",
        notify: true
    },
    {
        id: 4,
        name: "Their Name",
        phoneNum: "+5647382910",
        whatsApp: "+5647382910",
        email: "mail@email.il",
        location: "USA",
        courseAbbreviation: "QA",
        notify: true
    },
    {
        id: 5,
        name: "God Name",
        phoneNum: "+0912873465",
        email: "ooo@ppp.pup",
        location: "Heaven",
        courseAbbreviation: "BP",
        notify: false
    }
]