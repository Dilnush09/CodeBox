import React from "react";
import style from "../Navbar/Navbar.module.css"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Logotip from "../Navbar/Group@2x.jpg"

export default function Navbarjs() {
    return (
        <>
        <Navbar className={style.Container}>
        <Container className={style.Content}>
            <img src={Logotip} />
          <div className={style.Main}>
            <Link to="/home">Loyiha haqida</Link>
            <Link to="/tillar">Dasturlash tillari</Link>
            <Link to="/narxlar">Narxlar</Link>
            <div className={style.Language}>
                <select>
                    <option value="">O'zbek tili</option>
                    <option value="">Русский язык</option>
                    <option value="">English laungage</option>
                </select>
            </div>
        </div>
        </Container>
      </Navbar>
        </>
    )
}