import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState,useEffect } from "react";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
// import AddRoundedIcon from '@mui/icons-material/AddRounded';
import axios from "axios";

export default function TotalAdminsCard() {
  const [totalAdmins, SetTotalAdmins] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/user')
      .then(response => {
        
        SetTotalAdmins(response.data.message);
        
      })
      .catch(error => {
        console.log(error);
      });
  },[]);
  const filteredAdmins = totalAdmins.filter(admin => admin.isAdmin === true);
  const filteredUsers = totalAdmins.filter(admin => admin.isAdmin === false);
  return (
    <Stack spacing={3} paddingY={3} paddingX={4} 
      sx={{
        width: "100%",
        border: "1px solid rgba(109, 125, 147, 0.15)",
        boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)",
        borderRadius: "12px",
        bgcolor:"white",
        maxHeight:"265px"
      }}
    >
      <Typography variant="body2" sx={{ color: "#6D7D93" }} >
        Total All Users
      </Typography>
      <Stack direction="row" justifyContent="space-between">
        <Typography
          variant="h6"
          sx={{ fontSize:"28px" ,fontWeight: "bold", }}
          marginBottom={3}
          
        >
         <span style={{color: '#28a745'}}> {filteredAdmins.length}</span> Admins <p><span style={{color: '#28a745'}}>{filteredUsers.length}</span> Users</p>
        </Typography>
        <PermIdentityRoundedIcon fontSize="large" sx={{color:'#28a745'}} />
      </Stack>
      {/* <AddAdmin /> */}
    </Stack>
  );
}
