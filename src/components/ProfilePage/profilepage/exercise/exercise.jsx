import React from 'react'
import style from "./exercise.module.css"
import { BiDownArrow } from "react-icons/bi"

export default function Exercise() {
    const card = [
        { title: "Bajarilgan topshiriqlar", h1: 0, p: "Bugun: 0 ta" },
        { title: "Bajarilgan bo'limlar", h1: 0, p: "Bugun: 0 ta" },
        { title: "Dasturlash tili", h1: 0, p: "Bugun: 0 ta" },
    ]
    return (
        <div className={style.main}>
            {
                card.map((item) => {
                    return (

                        <div className={style.card}>
                            <p className={style.topshiriq}>{item.title}</p>
                            <h1>{item.h1}</h1>
                            <p className={style.p}> <span><BiDownArrow /></span>{item.p}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
