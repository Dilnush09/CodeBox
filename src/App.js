import React, { useState, useEffect } from "react";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
// import RouterMain from "./Component/Ittower/Navbar/RouterMain";
// import FadeLoader from "react-spinners/FadeLoader";
// import style from "./App.module.css"
// import { BackTop } from 'antd';
// import Appjs from "./Сount/App";
import RouterMain from "./assets/components/Page1/Navbar/RouterMain";



function App() {
        // const [loading, setLoading] = useState(false);
        // useEffect(() => {
        //         setLoading(true);
        //         setTimeout(() => {
        //                 setLoading(false)
        //         }, 2000)
        // }, [])
        // return (
        //         <div className="App">
        //                 {
        //                         loading ?
        //                                 <div className={style.loader}>
        //                                         <FadeLoader color={'#120C3A'} loading={loading} size={50} />
        //                                         <h2>Biroz kuting!</h2>
        //                                 </div>
        //                                 :
        //                                 <RouterMain />
        //                 }
        //                 <BackTop className={style.BackTop} />

        //         </div>
        // )


        return (
                <div className="App">
                        <RouterMain/>
                </div>
        )


}

export default App;
