import React from "react";
import logoWhiteGreen from "../../assests/Elements/LogoWhiteGreen.svg";
import styles from "./Header.module.css";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import { Button } from "@mui/base";
import {  useNavigate } from 'react-router-dom'
import { Avatar } from "@mui/material";
import Cookies from "js-cookie";
export default function Header() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("add-list-items");
  };
  return (
    <header className={styles.Header}>
      <div className={styles.headerWrapper}>
        <img src={logoWhiteGreen} alt="logo white" style={{marginRight:"20px" }} className={styles.logo}/>
        <SearchBar placeHoder={'Welcome to gofind here you can find you losts'} />
        <Avatar sx={{bgcolor: '#28A745'}}>{Cookies.get("username").charAt(0).toUpperCase()}</Avatar>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#28A745",
            textTransform: "capitalize",
            fontSize: "17px",
            alignSelf: "center",
            borderRadius: "10px",
            padding:'10px 5px',
            width:'150px',
            color: "white",
            border: "1px solid whitesmoke",
            marginLeft:"20px",
            fontWeight:'500'

          }}
          className={styles.addItem}
          onClick={handleNavigate}
        >
          
          Add Item
        </Button>
      </div>
    </header>
  );
}
