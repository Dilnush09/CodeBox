import React, { useState, useEffect } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import FadeLoader from "react-spinners/FadeLoader";
import style from "./App.module.css";
import { BackTop } from "antd";
import RouterMain from "./components/root/RouterMain";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className={style.loader}>
          <FadeLoader color={"#120C3A"} loading={loading} size={50} />
          <h2>Biroz kuting!</h2>
        </div>
      ) : (
        <RouterMain />
      )}
      <BackTop className={style.BackTop} />
      
    </div>
  );
}

export default App;
