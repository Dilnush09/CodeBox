import React from "react";
import style from "../Footer/Footer.module.css";
import { Link } from "react-router-dom";
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
                <Link to="/home">Loyiha haqida</Link>
                <Link to="/tillar">Dasturlash tillari</Link>
                <Link to="/narxlar">Narxlar</Link>
                <br/>
                <h4><ImFacebook2/></h4>
                <h4><BsInstagram/></h4>
                <h4><FaTelegramPlane/></h4>
                <h4><BsYoutube/></h4>
            </div>
        </div>
    )
}