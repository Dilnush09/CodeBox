import React from 'react'
import Cards from './cards/cards'
import Exercise from './exercise/exercise'
import style from "./list.module.css"

function Lists() {
    return (
        <div className={style.main}>
        <Exercise/>
        <Cards/>
        </div>
    )
}

export default Lists
