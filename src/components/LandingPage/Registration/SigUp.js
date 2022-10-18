import React, { useState } from "react";
import style from "../Registration/SingUp.module.css"

export default function SignUp() {
    const [ name, setName ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ number, setNumber ] = useState("");

    const Submit = () => {
        setName("");
        setPassword ("");
        setEmail("");
        setNumber("");
        console.log(name, password, email, number);
    }
    
    return (
        <div className={style.Conntainer}>
            <div className={style.Regist}>
                <div className={style.RegistText}>
                    <h3>SignUp</h3>
                    <form>
                        <div className={style.text}>
                            <input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required placeholder="First Name"
                            ></input>
                        </div>

                        <div className={style.password}>
                            <input 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required placeholder="Password"
                            ></input>
                        </div>

                        <div className={style.email}>
                            <input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required placeholder="Email"
                            ></input>
                        </div>

                        <div className={style.number}>
                            <input 
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required placeholder="Mobile"
                            ></input>
                        </div>
                    </form>
                </div>
                <div className={style.RegistButton}>
                    <button onClick={Submit}>Submit</button>
                </div>


            </div>
        </div>
    )
}