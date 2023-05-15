import { TextField } from '@mui/material'
import React from 'react'
import logoWhiteGreen from '../../assests/Elements/LogoWhiteGreen.svg'
import styles from './Header.module.css'
export default function Header() {
  return (
    <header className={styles.Header}>
        <div  className={styles.headerWrapper} >
            <img src={logoWhiteGreen} alt="logo white" width={'170'} />
            
                <TextField type="text" className={styles.searchBar} fullWidth color='success' size='small' style={{outlineOffset:"0px",outline:"none",borderRadius:'7px'}}/>

        </div>
 
    </header>
  )
}
