import React from 'react'
import { Link } from 'react-router-dom'
import PagenotFount404 from '../../assests/Illustration/404 Error Page not Found with people connecting a plug-amico (1).svg'
import styles from './ErrorPage.module.css'

export default function ErrorPage() {
  return (
    <section className={styles.ErrorPage}>
      <div className={styles.AllElements}>
      <img src={PagenotFount404} alt="Error Page" width={'100%'}/>
      <h1 style={{color:'#455A64',fontFamily:'Roboto',fontWeight:'700',letterSpacing:'0.1rem'}}>Back again to <Link to='/' style={{color:'#28A745',fontWeight:'900',textDecoration:'underline'}}>gofind</Link></h1>
      </div>
    </section>
  )
}
