import React from 'react';
import style from "./darslar.module.css";
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"
import {RiShareForwardLine} from "react-icons/ri"
import Rasm from "../../assets/lesson-thumb.jpg"
import { Collapse } from 'antd';
const { Panel } = Collapse;



function Darslar() {
  const onChange = (key) => {
    console.log(key);
  };

  const cards = [
    { dars: "1-dars. Kurs haqida (telegram guruh) ", minut: "00:05:54" },
    { dars: "2-dars. ReactJS nima ", minut: "00:11:28" },
    { dars: "3-dars. Nimalar kerak bo'ladi ", minut: "00:22:00" },
    { dars: "4-dars. Webstorm (tekin kupon)", minut: "5:38" },
    { dars: "5-dars. NPM Haqida ", minut: "00:13:36" },
    { dars: "6-dars. React JS app", minut: "00:11:28" },
  ]



  return (
    <div className={style.main}>
      <div className={style.accordions}>
        <div className={style.navbar}>
          <h4>Kurs tarkibi</h4>
          <p>30h</p>
        </div>
        <div className={style.accordion}>
          <Collapse 
          bordered={false}
          defaultActiveKey={['1']} 
          onChange={onChange}
          expandIcon={({ isActive }) => <AiOutlinePlus rotate={isActive ? 90 : 0} />}
          className={style.collapse}
          
          
          >


            <Panel className={style.panel} header="1-MODUL. ReactJs boshlang'ich ko'nikmalar" key="2">
              {
                cards.map(item => {
                  return (
                    <div className={style.card}>
                      <div className={style.img}>
                        <img src='https://mohirdev.uz/wp-content/themes/skillate/images/lesson-thumb.jpg' alt="" />
                      </div>
                      <div className={style.text}>
                        <h6>{item.dars}</h6>
                        <p>{item.minut}</p>
                      </div>

                    </div>
                  )
                })
              }
            </Panel>
            <Panel className={style.panel} header="2-MODULE. Class reaktiv komponentlari & formalar bilan ishlash " key="3">
              {
                cards.map(item => {
                  return (
                    <div className={style.card}>
                      <div className={style.img}>
                        <img src='https://mohirdev.uz/wp-content/themes/skillate/images/lesson-thumb.jpg' alt="" />
                      </div>
                      <div className={style.text}>
                        <h6>{item.dars}</h6>
                        <p>{item.minut}</p>
                      </div>

                    </div>
                  )
                })
              }

            </Panel>
            <Panel className={style.panel} header="3-MODULE. AMALIYOT. React JS film (React Movie)" key="4">
              {
                cards.map(item => {
                  return (
                    <div className={style.card}>
                      <div className={style.img}>
                        <img src='https://mohirdev.uz/wp-content/themes/skillate/images/lesson-thumb.jpg' alt="" />
                      </div>
                      <div className={style.text}>
                        <h6>{item.dars}</h6>
                        <p>{item.minut}</p>
                      </div>

                    </div>
                  )
                })
              }
            </Panel>

          </Collapse>
        </div>
      </div>
      <div className={style.savatcha}>
        <div className={style.sss}>
        <h1>247,000 UZS</h1>
          <button>Savatchaga qo'shish</button>
          <hr />
          <p>
            <RiShareForwardLine size={22}/> Ulashish
          </p>
        </div>
      </div>
    </div>
  )
}

export default Darslar
