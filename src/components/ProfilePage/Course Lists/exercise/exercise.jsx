import React from 'react'
import style from "./exercise.module.css"
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Exercise() {
    return (
        <div className={style.main}>
            <div className={style.til}>
                Java
            </div>
            <div className={style.topshiriq}>
                <div className={style.box}>
                    <div className={style.text}>
                        <p>Bajarilgan bo'limlar: </p>
                        <p>95%</p>
                    </div>
                    <div className={style.progres}>
                        <ProgressBar>
                            <ProgressBar animated striped variant="danger" now={32} key={1} />
                            <ProgressBar animated striped variant="warning" now={31} key={2} />
                            <ProgressBar animated striped variant="success" now={32} key={2} />
                        </ProgressBar>
                    </div>
                </div>
                <div className={style.box}>
                    <div className={style.text}>
                        <p>Bajarilgan topshiriqlar: </p>
                        <p>56%</p>
                    </div>
                    <div className={style.progres}>
                        <ProgressBar>
                            <ProgressBar animated striped variant="danger" now={36} key={1} />
                            <ProgressBar animated striped variant="warning" now={20} key={2} />
                        </ProgressBar>
                    </div>
                </div>
            </div>
        </div>
    )
}
