import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import style from "../About project/About.module.css";
import Programmning from "../About project/Img box/undraw_Programming_re_kg9v.png";

import { VscWorkspaceTrusted } from "react-icons/vsc";
import { VscWorkspaceUntrusted } from "react-icons/vsc";
import { FaEllipsisV } from "react-icons/fa";

export default function About() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password1, setPassword] = useState("");
  const url = "https://reqres.in/api/register";

  const mutateAdd = useMutation(() => {
    return fetch(`${url}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email: email, password: password1 }),
    }).then((res) => res.json());
  });

  const handleSignIN = () => {
    console.log(email, password1);
    setEmail("");
    setPassword("");
    mutateAdd.mutate(
      {},
      {
        onSuccess: (res) => {
          console.log(res);
          if(res?.token){
            localStorage.setItem("token", res.token)
            navigate("/profile")
          }
          
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };
  return (
    <div className={style.Container}>
      <div className={style.Context}>
        {/* ---------------------------Page1---------------------------------------------- */}
        <div className={style.Text}>
          <h2>Agar bajarishdan qo'rqsangiz</h2>
          <h2>buni albatta bajarib ko'ring</h2>
          <div className={style.Container}>
            <div className={style.inputs}>
              <div className={style.email}>
                <label htmlFor="email1">Email</label>
                <br />
                <input
                  type={"email"}
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                />
              </div>

              <div className={style.paswword}>
                <label htmlFor="paswword1">Parol</label>
                <br />
                <input
                  type={"password"}
                  name="password"
                  value={password1}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="****************"
                />
              </div>

              <br />
            </div>
            <div className={style.buttoninputs}>
              <button onClick={handleSignIN}>Kirish</button>
            </div>
          </div>
        </div>
        <div className={style.Img}>
          <img src={Programmning} />
        </div>
      </div>

      <div className={style.Context1}>
        {/*--------------------------------------Page2-----------------------------------  */}
        <div className={style.Textimg}>
          <h2>Dasturlashni amaliy</h2>
          <h2>tarzda CodeBox bilan o'rganing.</h2>
          <div className={style.Card1}>
            <p>JAVA</p>
          </div>
          <div className={style.TextimgCard}>
            <div className={style.cardtext}>
            <p>JAVA</p>
            <hr></hr>
            <hr></hr>
            </div>

            {/* <div className={style.TextimgCard1}>
            <hr></hr>
            </div> */}
            {/* <div className={style.cardhr}>
              <hr/>
              <hr/>
              <hr/>
            </div> */}
          </div>
          <div className={style.Card2}>
            <p>PYTHON</p>
          </div>
          <div className={style.Card3}>
            <p>GO</p>
          </div>
        </div>
        <div className={style.TextDasturlash}>
          <h3>01. Dasturlash tilini tanlang.</h3> <br/>
          <h5>Hozirgi kunda eng ommabop dasturlash</h5>
          <h5>tillarini CodeBoxga kiritdik va buni doimiy tarzda</h5>
          <h5>yangilab boramiz.</h5>
        </div>
      </div>

      <div className={style.Context2}>
        {/* --------------------Page3---------------------------------- */}
        <div className={style.text}>
          <p>02. Topshiriqlarni bajarish</p>
          <p>orqali o'rganing.</p> <br/>
          <p>Dasturlash algoritmlari, suhbat uchun</p>
          <p>topshiriqlari va murakkab topshiriqlarni bajaring.</p>
        </div>
        <div className={style.card}>
          <div className={style.buttoncard}>
            <h5><VscWorkspaceTrusted/></h5>
            <p>String</p>
            <h6><FaEllipsisV/></h6>
          </div>
          <div className={style.buttoncard1}>
            <h5><VscWorkspaceUntrusted/></h5>
            <p>Array</p>
            <h6><FaEllipsisV/></h6>
          </div>
          <div className={style.buttoncard2}>
          <h5><VscWorkspaceTrusted/></h5>
          <p>Logic</p>
          <h6><FaEllipsisV/></h6>
          </div>
        </div>
      </div>
    </div>
  );
}
