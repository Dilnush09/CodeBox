import React from 'react'
import style from "./settings.module.css"
import { BiUser } from "react-icons/bi"
import { BsTelephone } from "react-icons/bs"
import { FiLock, FiCamera } from "react-icons/fi"
import { RiDeleteBin6Line } from "react-icons/ri"


export default function ProfileSettings() {
  const items = [
    { icon: <BiUser />, part: "To'liq ismi", text: "Muhammad Jumayev" },
    { icon: <BsTelephone />, part: "Telefon nomer", text: "+998934614188" },
    { icon: <FiLock />, part: "Parol", text: "*************" },
    { icon: <FiLock />, part: "Parolni tasdiqlash", text: "*************" }
]


  return (
    <div className={style.main}>
         <div className={style.title}>
                <h1>Foydalanuvchi Sozlamalari</h1>
            </div>
            <div className={style.sozlamalar}>
                <div className={style.img1}>
                    <div className={style.img}>
                        <img src="https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682__340.jpg" alt="" />
                        <div className={style.camera}>
                            <p>
                                <FiCamera />
                            </p>
                             
                        </div>
                    </div>

                </div>
                <div className={style.forms}>
                    {
                        items.map((item) => {
                            return (
                                <div className={style.input}>
                                    <div className={style.icon}>
                                        {item.icon}
                                    </div>
                                    <div className={style.text}>
                                        <p className={style.about}>
                                            {item.part}
                                        </p>
                                        <input type="text" value={item.text} />
                                    </div>
                                </div>

                            )
                        })
                    }
                    <div className={style.buttongroup}>
                        <button>
                            <RiDeleteBin6Line />
                            O'chirish
                        </button>
                        <button>Saqlash</button>
                    </div>
                </div>
            </div>
    </div>
  )
}
