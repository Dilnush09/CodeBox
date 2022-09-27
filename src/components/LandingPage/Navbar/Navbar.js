import React from "react";
import style from "../Navbar/Navbar.module.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { navbarMain } from "../../util/navbarMain";
import brand from './brand.jpg'
export default function Navbarjs() {
  const navigate = useNavigate();
  const GotoProfile = () => {
    navigate("/profile");
  };
  const LogOut = () => {
    localStorage.removeItem("token");
    navigate("/home");
  };
  return (
    <>
      <Navbar className={style.Container}>
 
        <Container className={style.Content}>
          <div><img  src={brand}/></div>
          {navbarMain.map((item) => {
            return (
              !item.hidden && (
                <Link key={item.id} to={item.path}>
                  {item.title}
                </Link>
              )
            );
          })}
          {localStorage.getItem("token") ? (
            <h1>
              <button onClick={GotoProfile}>Profile</button>
              <button onClick={LogOut}>LogOut</button>
            </h1>
          ) : null}
          <div className={style.contbutton}>
            <button>Ro'yxatdan o'tish</button>
          </div>
        </Container>
        <Outlet />
      </Navbar>
    </>
  );
}
