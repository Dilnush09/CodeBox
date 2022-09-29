import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Logo from "./brand.jpg";
import { navbar } from "../../utils/navbar";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { MdMoreVert } from "react-icons/md";
import user from "./user.svg";
import { Button, Dropdown, Menu } from "antd";

export default function NavbarJs() {
  const navigate = useNavigate();
  const location = useLocation();
  const LogOut = () => {
    localStorage.removeItem("token");
    if (location?.pathname?.includes("profile")) {
      navigate("/project_about");
    } else {
      navigate(location.pathname);
    }
  };
  const gotoSignIn = () => {
    navigate("/signup");
  };

  const menu = (
    <Menu
      className={styles.MenuMore}
      items={[
        {
          key: "1",
          label: <p onClick={() => navigate("/profile")}>MyProfile</p>
        },
        {
          key: "2",
          label: <p>Settings</p>
        },
        {
          key: "3",
          label: <p onClick={LogOut}>Logout</p>
        }
      ]}
    />
  );
  const menu1 = (
    <Menu
      className={styles.MenuBill}
      items={[
        {
          key: "1",
          label: <p>Kurs yangiliklari</p>
        },
        {
          key: "2",
          label: <p>Ogohlantirishlar</p>
        },
        {
          key: "3",
          label: <p onClick={LogOut}>Yangi Darsliklar</p>
        }
      ]}
    />
  );
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <div className={styles.NavarWrapper} >
          <div className={styles.Logo}>
            <img src={Logo} />
          </div>
          <div className={styles.NavbarBody}>
            {navbar.map((value) => {
              return (
                !value.hidden && (
                  <NavLink
                    className={styles.active_link}
                    key={value.id}
                    to={value.path}
q                  >
                    {value.title}
                  </NavLink>
                )
              );
            })}
          </div>
          <div className={styles.Auth}>
            {localStorage.getItem("token") ? (
              <div className={styles.userProfile}>
                <div className={styles.SearchPart}>
                  <p>
                    <AiOutlineSearch className={styles.SearchIcon} />
                  </p>
                  <p>
                    <Dropdown overlay={menu1} placement="bottom" arrow>
                      <BiBell className={styles.SearchIcon} />
                    </Dropdown>
                  </p>
                </div>

                <div className={styles.UserPart}>
                  <div
                    className={styles.UserImg}
                    onClick={() => navigate("/profile")}
                  >
                    <img src={user} alt="user img" />
                  </div>
                  <div className={styles.UserItem}>
                    <p>Xayitov Murodilla</p>
                    <p>
                      <span>Ta'rif:</span>
                      <span>6 OY</span>|<span>24.08.2022</span>
                    </p>
                  </div>
                  <div className={styles.SettingPart}>
                    <p>
                      <Dropdown overlay={menu} placement="bottom" arrow>
                        <MdMoreVert className={styles.MoreIcon} />
                      </Dropdown>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.AutButton}>
                <button
                  className={styles.SigUp}
                  onClick={gotoSignIn}
                  width={"120px"}
                >
                  Ro'yhatdan o'tish
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
