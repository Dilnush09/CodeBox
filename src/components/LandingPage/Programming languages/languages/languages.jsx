import React from 'react'
import ReactStars from "react-rating-stars-component";
import ProgressBar from 'react-bootstrap/ProgressBar';
import style from "./languages.module.css"
import js from "../../../assets/js.png"
import jv from "../../../assets/jv.png"
import html from "../../../assets/html.png"
import jsn from "../../../assets/json.png"
import nodejs from "../../../assets/nodejs.png"
import py from "../../../assets/js.png"
import json from "../../../assets/json.png"
import rc from "../../../assets/rc.png"
import sql from "../../../assets/sql.png"
import php from "../../../assets/php.png"


function Languagespr() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const tillar = [
        { img: html, name: "HTML/CSS", now: 2, boluv: "1/50" },
        { img: js, name: "Javascript", now: 50, boluv: "20/40" },
        { img: rc, name: "Reactjs", now: 2, boluv: "1/50" },
        { img: jsn, name: "Json", now: 92, boluv: "28/30" },
        { img: nodejs, name: "Nodejs", now: 50, boluv: "20/40" },
        { img: jv, name: "Java", now: 92, boluv: "28/30" },
        { img: sql, name: "Sql", now: 2, boluv: "1/50" },
        { img: py, name: "Python", now: 50, boluv: "20/40" },
        { img: php, name: "Php", now: 92, boluv: "28/30" },
    ]


    return (
        <>
            <div className={style.main}>
                <div className={style.cards}>
                    {
                        tillar.map(item => {
                            return (

                                <div className={style.card}>
                                    <div className={style.img}><img src={item.img} alt="html" /></div>
                                    <div className={style.bodystar}>
                                        <div className={style.stars}>
                                            <ReactStars
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                // color="#FFAD0F"
                                                isHalf={true}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#FFAD0F"
                                            />
                                            <span>4.1 (15) </span>
                                        </div>
                                        <div className={style.button}><button>{item.name}</button></div>
                                    </div>
                                    <div className={style.progress1}>
                                        <span>{item.boluv}</span>
                                        <span>{item.now}% Bajarildi</span>
                                    </div>
                                    <div className={style.progress}>
                                        <ProgressBar variant='#086F6C' now={item.now} />
                                    </div>
                                <div className={style.but}><button>Kursni davom ettirish</button></div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Languagespr
