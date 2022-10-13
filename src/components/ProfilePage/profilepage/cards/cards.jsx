import React from 'react'
import style from "./cards.module.css"
import { BsArrowRight } from "react-icons/bs"

export default function Cards() {
    const card = [
        { til: "Java", topshiriq: "128 ta", bolim: "38 ta", body: "Java - silno tipirovannyy obyektno orientirovann yysag yazyk programmirovaniya, razrabotannyy kompaniey Sun Microsystems. V nastoyashchee vremya proekt matlenejit OpenSource i rasprof ranya yaetsya po litsenzii GPL. V OpenJDK vnosyat vklad krupnye kompanii, sochi kak - Oracle, RedHat, IBM, Google" },
        { til: "Python", topshiriq: "122 ta", bolim: "13 ta", body: "Python - vysokourovnevyy yazyk programirovaniya obshchego naznacheniya, orientirovannyy na povyshenie proizvoditelnosti razrabotchika i chitaemosti koda. Syntaxxd Python minimalis tichen. V toni vremya standartnaya biblioteka vklyuchaet bolshoy ob'yom poleznyx fonksiyont" },
        { til: "GO", topshiriq: "122 ta", bolim: "13 ta", body: "Go - kompilyumemyy multilogo yazyk programmovaniya, razrabotannyy vnutri kompanii Google.Razrabotka Go nachalas v sentabr 2007 goda, ego neposredstvennym projektirovaniem zanima lis Robert Grizmer, Rob Pikk i Ken Thompson, zanimavshiesya do etogo proektom razrabotki " },
    ]
    return (
        <div className={style.main}>
            <div className={style.navbar}>
                <div className={style.title}>
                    <h1>Barcha kurslar</h1>
                </div>
                <div className={style.button}>
                    <button>Barchasi</button>
                </div>
            </div>
            <div className={style.card}>
            {
                card.map((item)=>{
                    return(
            <div className={style.cards}>
                <div className={style.til}>
                    <h1>{item.til}</h1>
                    <p>{item.topshiriq} <span>topshiriq</span> | {item.bolim} <span>bo'lim</span></p>
                </div>
                <hr />
                <div className={style.body}>
                    <p> {item.body} </p>
                </div>
                <div className={style.button2}>
                    <button>Kursni boshlash <BsArrowRight /></button>
                </div>
            </div>

                    )
                })
            }
            </div>
        </div>
    )
}

