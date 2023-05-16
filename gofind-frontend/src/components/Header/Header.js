import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import React from 'react'
import logoWhiteGreen from '../../assests/Elements/LogoWhiteGreen.svg'
import styles from './Header.module.css'
export default function Header() {
  return (
    <header className={styles.Header}>
        <div  className={styles.headerWrapper} >
            <img src={logoWhiteGreen} alt="logo white" width={'170'} />
            <div style={{width:'100%', display:'flex',flexWrap:'nowrap',alignItems:'center'}}>
                <TextField type="text" className={styles.searchBar}  color='success' size='small' style={{width:'95%',outlineOffset:"0px",outline:"none",borderRadius:'7px',borderTopRightRadius:'0px',borderBottomRightRadius:'0px',borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}/>
                <div style={{height:'100%',padding:'6px',backgroundColor:'#28a745',borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}><SearchIcon style={{backgroundColor:'#28a745',color:'whitesmoke',width:'100%'}}/></div>
             </div>
        </div>
 
    </header>
  )
}
