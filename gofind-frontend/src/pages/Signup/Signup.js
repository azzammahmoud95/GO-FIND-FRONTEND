import React, { useState } from "react";
import LogonameBlackGreen from "../.././assests/Elements/LogonameBlackGreen.svg";
import styles from "./Signup.module.css";
import { TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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
        <form action="" className={styles.formStyle}>
          <h3 className={styles.formTitle}>
            Sign<span style={{ color: "#28A745" }}>up</span>{" "}
          </h3>
          <TextField label="Username" color="success" type="text" fullWidth />
          <TextField label="Email" color="success" type="email" />
          <TextField
            label="Password"
            color="success"
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
          <TextField label="Phone" color="success" type="number" />
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
