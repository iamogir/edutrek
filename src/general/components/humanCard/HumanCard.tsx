import style from "./humanCard.module.css";
import Point from "../../../icons/entityHuman/point.svg";
import Alarm from "../../../modules/active/presentation/components/alarm/Alarm.tsx";
import {HumanCardInfo, Notice} from "../types.ts";
import PhoneIcon from "../../../icons/entityHuman/phone.svg"
import AtIcon from "../../../icons/entityHuman/at.svg"
import WhatsAppIcon from "../../../icons/entityHuman/whatsApp.svg"
import LocationIcon from "../../../icons/entityHuman/location.svg"
import BookIcon from "../../../icons/entityHuman/book.svg"
import {Link} from "react-router-dom";

interface Props {
    info: HumanCardInfo,
    notify: Notice | undefined,
}

const HumanCard = ({info, notify}: Props) => {

    return (
        <div className={style.box}>
            <div className={style.header}>
                <div>
                    <Point/>
                    <p className={style.name}>{info.name}</p>
                </div>
                <Alarm  serial={info.id} notify={notify}/>
            </div>
            <div className={style.body}>
                <div className={style.block}>
                    <div>
                        <p><PhoneIcon/><span className={style.string}>{info.phoneNum}</span></p>
                        {info.whatsApp ?
                            <Link to={"https://wa.me/" + info.phoneNum} target="_blank"><WhatsAppIcon/></Link> : <></>}
                    </div>
                    <p><AtIcon/><span className={style.string}>{info.email}</span></p>
                </div>
                <div className={`${style.block} ${style.right}`}>
                    <p><LocationIcon className={style.icons}/><span className={style.string}>{info.location}</span></p>
                    <p><BookIcon/><span className={style.string}>{info.courseAbbreviation}</span></p>
                </div>
            </div>
        </div>
    );
};

export default HumanCard;