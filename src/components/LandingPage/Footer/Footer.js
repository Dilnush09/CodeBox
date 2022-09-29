import React from "react";
import style from "../Footer/Footer.module.css";
import Logotip from "../Footer/Logotip.jpg";
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

export default function Footerjs() {
    return (
        <div className={style.Container}>
            <div className={style.Context}>
                <img src={Logotip} />
                <p>© “Personal Development Process” MCHJ</p>
            </div>
            <div className={style.Main}>
                <p>Loyiha haqida</p>
                <p>Dasturlash tillari</p>
                <p>Narxlar</p>
                <br/> 
                <h4><ImFacebook2/></h4>
                <h4><BsInstagram/></h4>
                <h4><FaTelegramPlane/></h4>
                <h4><BsYoutube/></h4>
            </div>
        </div>
    )
}