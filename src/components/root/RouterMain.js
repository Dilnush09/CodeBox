import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbarjs from "../LandingPage/Navbar/Navbar";
import { navbarMain } from "../util/navbarMain";
import Footerjs from "../LandingPage/Footer/Footer";
export default function RouterMain() {
  return (
    <div>
      <Routes>
        <Route element={<Navbarjs />}>
          {navbarMain.map(({ id, path, Element, param }) => {
            return param && <Route key={id} path={path} element={Element} />;
          })}
        </Route>
        <Route element={<Navbarjs />}>
          {navbarMain.map(({ id, path, Element, hidden }) => {
            return !hidden && <Route key={id} path={path} element={Element} />;
          })}
          <Route path="/" element={<Navigate to={"/home"} />} />
        </Route>
      </Routes>
      <Footerjs />
    </div>
  );
}
