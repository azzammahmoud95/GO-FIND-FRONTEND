import React, { useState } from "react";
import LogonameBlackGreen from "../.././assests/Elements/LogonameBlackGreen.svg";
import styles from "./Signup.module.css";
import { TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import axios from 'axios'

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      phone: formValues.phone
    };

    console.log(formData); // Log form values to the console

    axios.post("http://localhost:5000/api/user/register",formData) // Set the desired URL here
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.topSide}>
        <img
          src={LogonameBlackGreen}
          alt="logo"
          width={"210"}
          className={styles.logoStyle}
        />
      </div>
      <div className={styles.CenterSide}>
        <form
          method="post"
          className={styles.formStyle}
          onSubmit={handleSubmit}
        >
          <h3 className={styles.formTitle}>
            Sign<span style={{ color: "#28A745" }}>up</span>{" "}
          </h3>
          <TextField
            label="Username"
            color="success"
            type="text"
            style={{width: "calc(100% - 2px)"}}
            value={formValues.username}
            onChange={(event) =>
              setFormValues({ ...formValues, username: event.target.value })
            }
          />
          <TextField
            label="Email"
            color="success"
            type="email"
            value={formValues.email}
            onChange={(event) =>
              setFormValues({ ...formValues, email: event.target.value })
            }
          />
          <TextField
            label="Password"
            color="success"
            value={formValues.password}
            onChange={(event) =>
              setFormValues({ ...formValues, password: event.target.value })
            }
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Phone"
            color="success"
            type="number"
            value={formValues.phone}
            onChange={(event) =>
              setFormValues({ ...formValues, phone: event.target.value })
            }
          />
          <Typography
            variant="body2"
            color="gray"
            style={{ marginLeft: "10px" }}
          >
            Already have an account{" "}
            <Link
              to="/login"
              style={{
                color: "#28A745",
                fontWeight: 700,
                textDecoration: "underline",
              }}
              className="linkTo"
            >
              Login
            </Link>
          </Typography>
          <Button
            variant="contained"
            type="submit"
            style={{
              backgroundColor: "#28A745",
              textTransform: "capitalize",
              fontSize: "17px",
              width: "35%",
              alignSelf: "center",
              borderRadius: "10px",
              marginBottom: "10px",
            }}
          >
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
}
