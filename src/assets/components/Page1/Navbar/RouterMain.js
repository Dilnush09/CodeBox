import React from "react";
import { Routes, Route ,  Navigate} from "react-router-dom";
import Navbarjs from "../Navbar/Navbar"
import Footerjs from "../Footer/Footer"
import Boxjs from "../Box/Box"
import Box2js from "../Box2/Box2"
import Box3js from "../Box3/Box3"

export default function RouterMain() {
    return (
        <div>
          <Navbarjs />
          <Routes>
            <Route path="/home" element={<Boxjs/>}/>,
            <Route path="/tillar" element={<Box2js/>}/>,
            <Route path="/narxlar" element={<Box3js/>}/>,
            <Route path="/" element={<Navigate to="/home"/>}/>
          </Routes>
          <Footerjs />
        </div>
      );
}