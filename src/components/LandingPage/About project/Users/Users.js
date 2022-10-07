import React from "react";
import styles from "./users.module.css";
export default function Users() {
  return (
    <div className={styles.Container}>
      <div className={styles.Main}>
        <div className={styles.TextUser}>
          <div>
            <p>
              Tizimdan foydalanuvchilar soni 500+ dan ortiq. Siz ham ular safiga
              qo’shiling{" "}
            </p>
          </div>
          <div>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              diam quam nulla porttitor massa id neque aliquam vestibulum.
              Malesuada pellentesque elit eget gravida cum sociis natoque
              penatibus et. Vitae semper quis lectus nulla. Viverra vitae congue
              eu consequat ac felis donec et. Turpis egestas integer eget
              aliquet nibh praesent tristique. At auctor urna nunc id.
              Consectetur adipiscing
            </p>
          </div>
          <div>
            <button>Qo'shish</button>
          </div>
        </div>
        <div className={styles.UserStyle}>
          <div className={styles.FirstCircle}>
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4rsSzLimlQyniEtUV4-1raljzFhS45QBeAw&usqp=CAU"
              }
            />
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4rsSzLimlQyniEtUV4-1raljzFhS45QBeAw&usqp=CAU"
              }
            />
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4rsSzLimlQyniEtUV4-1raljzFhS45QBeAw&usqp=CAU"
              }
            />
            <div className={styles.SecondCircle}>
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2vBQ1vOla9pPM6M0ZsYZb7OckCS21cgN_Q&usqp=CAU"
                }
              />
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2vBQ1vOla9pPM6M0ZsYZb7OckCS21cgN_Q&usqp=CAU"
                }
              />
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2vBQ1vOla9pPM6M0ZsYZb7OckCS21cgN_Q&usqp=CAU"
                }
              />
              <div className={styles.Third}>
                <img
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3qBVX4XIA8zq3LpBn64zAuOt9_IZ7_H5uA&usqp=CAU"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
