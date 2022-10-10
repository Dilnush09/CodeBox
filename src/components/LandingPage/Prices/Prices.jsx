import React from "react";
import style from "../Prices/Prices.module.css";
import ReactStars from "react-rating-stars-component";
import { AiOutlineArrowRight } from "react-icons/ai"
import { CgShoppingCart } from "react-icons/cg"
import njs from "../../assets/bgnodejs.png"
import cpl from "../../assets/c++.png"
import php from "../../assets/bgphp.png"
import py from "../../assets/tgbotpy.png"
import hm from "../../assets/chtml.png"
import js from "../../assets/bgjs.png"

export default function Prices() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const card=[
        {img: njs ,name: "Professional Node.JS. Noldan e'lonlar saytini yaratamiz", desc1:"Oqituvchi:", span:"Bexruz Xolmuminov",desc2:" in Backend dasturlash",sum:"247,000"},
        {img: py ,name: "Mukammal Telegram Bot", desc1:"Oqituvchi:", span:"Anvar Narzullaev",desc2:" in Anvar Narzullaev",sum:"247,000"},
        {img: php ,name: "PHP dasturlash asoslari", desc1:"Oqituvchi:", span:"Ahmadjon Xashimov",desc2:" in Backend dasturlash",sum:"167,000"},
        {img: hm ,name: "HTML, CSS, Bootstrap, JS 7+ loyiha", desc1:"Oqituvchi:", span:"Muhammadrasul",desc2:" in Pullik kurslar",sum:"247,000"},
        {img: cpl ,name: "C++ dasturlash asoslari", desc1:"Oqituvchi:", span:"Mohirdev",desc2:" in Foundation",sum:"347,000"},
        {img: js ,name: "JavaScript To'liq Kurs – “From 0 to Hero”", desc1:"Oqituvchi:", span:"Samar Badriddinov",desc2:" in Javascript",sum:"247,000"},
    ]

    return (
        <div className={style.main}>
            <div className={style.cards}>
                {
                    card.map(item=>{
                        return(

                <div className={style.card}>
                    <div className={style.head}>
                        <div className={style.img} style={{backgroundImage:  `url(${item.img})`}}>
                            <div className={style.overlay}>
                                <div className={style.buy}>
                                    <CgShoppingCart size={20}/>  Savatchaga qo'shish
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.body}>
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
                        </div>
                        <div className={style.text}>
                            <h2>{item.name}</h2>
                            <p> {item.desc1} <span>{item.span}</span> {item.desc2}</p>
                        </div>
                    </div>
                    <div className={style.footer}>
                        <div className={style.sum}>
                            {item.sum} UZS
                        </div>
                        <button className={style.strelka}>
                            <AiOutlineArrowRight size={20} />
                        </button>
                    </div>
                </div>
                        )
                    })
                }
            </div>
        </div>
    )
}