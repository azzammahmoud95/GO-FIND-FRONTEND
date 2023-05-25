import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  MenuItem,
  Select,
  DialogActions,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  InputLabel,
  FormControl,
} from "@mui/material";
import Cookies from "js-cookie";
import axios from "axios";
import styles from "./UserProfile.module.css";
export default function UserProfile() {
  const userId = Cookies.get("userId");
  const [userIDD, setUserIDD] = useState(0);
  const [open, setOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({
    username: "",
    email: "",
    dateOfBirth: "",
    phone: "",
    gender: "",
  });
  const handleEdit = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const gender = [
    {
      id: 1,
      gender: "Male",
    },
    {
      id: 2,
      gender: "Female",
    },
    {
      id: 3,
      gender: "Prefer Not to Say",
    },
  ];

  useEffect(() => {
    setUserIDD(userId);
    axios
      .get(`http://localhost:5000/api/user/${userId}`)
      .then((response) => {
        setUserProfile(response.data.message);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [handleEdit]);

  return (
    <div className={styles.profileWrapper}>
      <h1 className={styles.title}>
        User <span style={{ color: "#28A745" }}>Profile</span>
      </h1>
      <Avatar sizes="10" sx={{ bgcolor: "#28A745", width: 55, height: 55 }}>
        {Cookies.get("username").charAt(0).toUpperCase()}
      </Avatar>
      <div className={styles.infoWrapper}>
        <div className={styles.userInfoPart}>
          <h3>
            <strong>User Id:</strong> {userIDD}
          </h3>
          <h3>
            <strong>Email:</strong> {userProfile.email}
          </h3>
          <h3>
            <strong>Date Of Birth:</strong> {userProfile.dateOfBirth}
          </h3>
        </div>
        <div className={styles.userInfoPart}>
          <h3>
            <strong>Username:</strong> {userProfile.username}
          </h3>
          <h3>
            <strong>Phone:</strong> {userProfile.phone}
          </h3>
          <h3>
            <strong>Gender:</strong> {userProfile.gender}
          </h3>
        </div>
        <Button
          style={{
            border: "2px solid #28A745",
            color: "#28A745",
            borderRadius: "9px",
            width: "150px",
          }}
          onClick={handleEdit}
        >
          Edit Profile
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          style={{ alignSelf: "center", fontWeight: "600", color: "#394452" }}
        >
          Edit <span style={{ color: "#28A745" }}>Profile</span>
        </DialogTitle>
        
        
        <DialogContent >
        <Stack
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
            style={{ width: "100%",marginBottom:'20px' }}
          >
        <Avatar
          sizes="10"
          sx={{
            bgcolor: "#28A745",
            width: 55,
            height: 55,
            alignSelf: "center",
            marginRight:'5px',
          }}
        >
          {Cookies.get("username").charAt(0).toUpperCase()}
        </Avatar>
          <TextField
            margin="dense"
            id="username"
            label="username"
            type="text"
            fullWidth
            color="success"
            value={userProfile.username}
            onChange={(event) =>(prevState) => ({ ...prevState , username: event.target.value})}
          />
          </Stack>
          <Stack
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
            style={{ width: "100%",marginBottom:'20px' }}
          >
            <TextField
              type="text"
              label="Email"
              color="success"
              fullWidth
              required
              style={{ width: "49%" }}
              value={userProfile.email}
              onChange={(event)=>(prevState) => ({ ...prevState, email: event.target.value })}
            />
            <TextField
              type="tel"
              label="Phone"
              color="success"
              placeholder="03-123456"
              pattern="^(\+|00)?(961)?(0)?[1-9]{1}[0-9]{7}$"
              fullWidth
              required
              style={{ width: "49%" }}
              value={userProfile.phone} // Set the value to userProfile.phone
              onChange={(event) =>
                setUserProfile((prevState) => ({
                  ...prevState,
                  phone: event.target.value
                }))}
            />
          </Stack>
          <Stack
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
            style={{ width: "100%" }}
          >
            <TextField
              type="date"
              label="Date of Birth"
              color="success"
              fullWidth
              required
              style={{ width: "49%", colorScheme: "green" }}
              value={userProfile.dateOfBirth}
              onChange={(event) =>(prevState) =>({ ...prevState,dateOfBirth:event.target.value})}
              focused
            />
            <FormControl
              style={{ width: "49%" }}
              label="Location"
              color="success"
              fullWidth
            >
              <InputLabel id="location-select-label">Gender</InputLabel>
              <Select
                labelId="Gender-select-label"
                id="Gender-select"
                required
                label="Gender"
                value={userProfile.gender}
               onChange={(event) =>(prevState) => ({ ...prevState , gender: event.target.value})}
          
              >
                {gender.map((option) => (
                  <MenuItem key={option.id} value={option.gender}>
                    {option.gender}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </DialogContent>

        <DialogActions
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Button
            onClick={handleClose}
            style={{
              border: "2px solid #28A745",
              borderRadius: "9px",
              color: "#28A745",
              width: "20%",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            autoFocus
            style={{
              border: "2px solid #28A745",
              borderRadius: "9px",
              backgroundColor: "#28A745",
              width: "20%",
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
