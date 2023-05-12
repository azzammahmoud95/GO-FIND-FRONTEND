import React from 'react'
import LogonameBlackGreen from "../.././assests/Elements/LogonameBlackGreen.svg"
import styles from "./Signup.module.css"
import DirBordGreen1 from "../../assests/Elements/DirBordGreen1.svg"
import k from "../../assests/Elements/MagniBordGreen.svg"
export default function Signup() {
  return (
    <div className={styles.loginPage}>
        <div className={styles.topSide}>
        <img src={LogonameBlackGreen} alt="logo"  width={'200'} className={styles.logoStyle}/>
        </div>
        <div className={styles.CenterSide}>
            <form action="" className={styles.formStyle}>
                <h2>Signin </h2>
            </form>
        </div>
    </div>
  )
}
