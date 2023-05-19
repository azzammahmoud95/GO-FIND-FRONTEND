import React from "react";
import logoWhiteGreen from "../../assests/Elements/LogoWhiteGreen.svg";
import styles from "./Header.module.css";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import { Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Header() {
  const navigate = useNavigate();
  const username = Cookies.get("username");

  const handleNavigate = () => {
    navigate("add-list-items");
  };

  const renderAvatar = () => {
    if (username) {
      return (
        <Avatar sx={{ bgcolor: "#28A745" }}>
          {username.charAt(0).toUpperCase()}
        </Avatar>
      );
    } else {
      return (
        <Avatar sx={{ bgcolor: "#28A745" }} />
      );
    }
  };

  return (
    <header className={styles.Header}>
      <div className={styles.headerWrapper}>
        <img
          src={logoWhiteGreen}
          alt="logo white"
          style={{ marginRight: "20px" }}
          className={styles.logo}
        />
        <SearchBar placeHoder={"Welcome to gofind here you can find you losts"} />
        {renderAvatar()}
        <Button
          variant="contained"
          style={{
            backgroundColor: "#28A745",
            textTransform: "capitalize",
            fontSize: "17px",
            alignSelf: "center",
            borderRadius: "10px",
            padding: "10px 5px",
            width: "150px",
            color: "white",
            border: "1px solid whitesmoke",
            marginLeft: "20px",
            fontWeight: "500",
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
