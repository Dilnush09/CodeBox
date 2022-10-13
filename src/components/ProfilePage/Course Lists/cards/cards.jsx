import React from 'react'
import style from "./cards.module.css"
import { BsArrowRight } from "react-icons/bs"

export default function Cards() {
    const card = [
        { title: "String-1", body: "String ko'rinishidagi boshlang'ich topshiriqlar to'plami- loops lar mavjud emas", daraja: "Oson" },
        { title: "String-2", body: "String ko'rinishidagi boshlang'ich topshiriqlar to'plami- loops lar mavjud emas",daraja: "O'stacha" },
        { title: "Array-1", body: "String ko'rinishidagi boshlang'ich topshiriqlar to'plami- loops lar mavjud emas", daraja: "Oson" },
        { title: "Array-2", body: "String ko'rinishidagi boshlang'ich topshiriqlar to'plami- loops lar mavjud emas", daraja: "Murakkab" },
        { title: "Logic-1", body: "String ko'rinishidagi boshlang'ich topshiriqlar to'plami- loops lar mavjud emas", daraja: "Oson" },
        { title: "Logic-2", body: "String ko'rinishidagi boshlang'ich topshiriqlar to'plami- loops lar mavjud emas", daraja: "O'rtacha" }
    ]
    return (
        <div className={style.main}>
            <div className={style.navbar}>
                <div className={style.title}>
                    <h1>Bo'limlar</h1>
                </div>
                <div className={style.button}>
                    <button>Barchasi</button>
                </div>
            </div>
            <div className={style.card}>
                {
                    card.map((item) => {
                        return (
                            <div className={style.cards}>
                                <div className={style.title2}>
                                    <div className={style.sleepln}>
                                        <h1>{item.title}</h1>
                                    </div>
                                    <div className={style.line}></div>
                                </div>
                                <hr />
                                <div className={style.body}>
                                    <p> {item.body} </p>
                                </div>
                                <div className={style.button2}>
                             
                                <div className={style.til}>
                                    <p>Daraja</p>
                                    <p>{item.daraja}</p>
                                </div>
                                    <button>Bajarish <BsArrowRight /></button>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}