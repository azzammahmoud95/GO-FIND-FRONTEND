import React from "react";
import Footer from "../../components/Footer/Footer.js";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import logoWhiteGreen from "../../assests/Elements/LogoWhiteGreen.svg";
import styles from "./Header.module.css";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
export default function Home() {
  const renderAvatar = () => {
    if (username) {
      return (
        <Avatar sx={{ bgcolor: "#28A745" }}>
          {username.charAt(0).toUpperCase()}
        </Avatar>
      );
    } else {
      return <Avatar sx={{ bgcolor: "#28A745" }} />;
    }
  };
  const [items, setItems] = useState([]);

  // const searchOptions = () => {
  //   items.map((item, i) => {
  //     setOptions([...options, {...item, label: item.title}])
  //   })
  // }

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/item")
      .then((response) => {
        let posts = response.data.message;
        setItems(posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const navigate = useNavigate();
  const username = Cookies.get("username");

  const handleNavigate = () => {
    navigate("add-list-items");
  };
  return (
    <>
      <header className={styles.Header}>
        <div className={styles.headerWrapper}>
          <img
            src={logoWhiteGreen}
            alt="logo white"
            // style={{ marginRight: "20px" }}
            className={styles.logo}
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
            }}
          >
            <Autocomplete
              disablePortal
              options={items}
              freeSolo
              type="text"
              className={styles.searchBar}
              color="success"
              fullWidth
              size="small"
              style={{
                outlineOffset: "0px",
                outline: "none",
                borderRadius: "7px",
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                backgroundColor: "white",
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder={"Welcome to gofind here you can find you losts"}
                  color="success"
                />
              )}
            />
            {/* <TextField
            type="text"
            className={styles.searchBar}
            color="success"
            fullWidth
            size="small"
            style={{
              outlineOffset: "0px",
              outline: "none",
              borderRadius: "7px",
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "0px",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
              backgroundColor: "white",
            }}
            placeholder={"Welcome to gofind here you can find you losts"}
          /> */}
            <div
              style={{
                height: "100%",
                padding: "6.5px",
                backgroundColor: "#28a745",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              <SearchIcon
                style={{
                  backgroundColor: "#28a745",
                  color: "whitesmoke",
                  width: "100%",
                }}
              />
            </div>
          </div>
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
              // marginLeft: "20px",
              fontWeight: "500",
            }}
            className={styles.addItem}
            onClick={handleNavigate}
          >
            Add Item
          </Button>
        </div>
      </header>
      <Footer />
    </>
  );
}
