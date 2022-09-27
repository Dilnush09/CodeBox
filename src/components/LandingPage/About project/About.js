import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import style from "../About project/About.module.css";
import Programmning from "../About project/Img box/undraw_Programming_re_kg9v.png";

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
                <label htmlFor="email1">email</label>
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
        <div className={style.Textimg}></div>
        <div className={style.TextDasturlash}></div>
      </div>
    </div>
  );
}
