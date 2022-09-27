import React from "react";
import { Routes, Route ,  Navigate} from "react-router-dom";
import Navbarjs from "../Navbar/Navbar"
import Footerjs from "../Footer/Footer"
import About from "../About project/About"
import Programming from "../Programming languages/Programming"
import Prices from "../Prices/Prices"

export default function RouterMainjs() {
    return (
        <div>
          <Navbarjs />
          <Routes>
            <Route path="/home" element={<About/>}/>,
            <Route path="/tillar" element={<Programming/>}/>,
            <Route path="/narxlar" element={<Prices/>}/>,
            <Route path="/" element={<Navigate to="/home"/>}/>
          </Routes>
          <Footerjs />
        </div>
      );
}