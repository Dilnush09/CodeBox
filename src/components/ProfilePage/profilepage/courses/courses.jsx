import React from 'react'
import style from "./courses.module.css"
import {AiOutlinePlus} from "react-icons/ai"

export default function Courses() {
    return (
        <div className={style.main}>
            <div className={style.title}>
                <h1>+ Xozirda sizda kurslar mavjud emas</h1>
            </div>
            <div className={style.card}>
                <AiOutlinePlus/> Kurs yaratish
            </div>
        </div>
    )
}