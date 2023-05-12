import React from 'react'
import LogonameBlackGreen from "../.././assests/Elements/LogonameBlackGreen.svg"
import styles from "./Signup.module.css"
export default function Signup() {
  return (
    <div>
        <div className={styles.topSide}>
        <img src={LogonameBlackGreen} alt="logo"  width={'150'}/>
        </div>
    </div>
  )
}
