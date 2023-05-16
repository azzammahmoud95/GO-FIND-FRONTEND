import React from "react";
import logoWhiteGreen from "../../assests/Elements/LogoWhiteGreen.svg";
import styles from "./Header.module.css";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/base";
export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.headerWrapper}>
        <img src={logoWhiteGreen} alt="logo white" style={{ width: "10rem" }} />
        <SearchBar />
        <Button
          variant="contained"
          style={{
            backgroundColor: "#28A745",
            textTransform: "capitalize",
            fontSize: "17px",
            width: "10%",
            alignSelf: "center",
            borderRadius: "15px",
            padding:'10px 20px',
            color: "white",
            border: "2px solid whitesmoke",
          }}
          startIcon={<AddIcon />}
        >
          Add Item
        </Button>
      </div>
    </header>
  );
}
