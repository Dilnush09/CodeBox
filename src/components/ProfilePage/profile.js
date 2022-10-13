import React from 'react'
import style from "./profile.module.css"

import Profilepage from './profilepage/profilepage'

export default function profile() {



  return (
    <div className={style.main}>
      <Profilepage/>
    </div>
  )
}
