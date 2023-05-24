import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
import Cookies from 'js-cookie'
import axios from 'axios'
import styles from './UserProfile.module.css'
export default function UserProfile() {
  const userId = Cookies.get('userId');
  const [userIDD, setUserIDD] = useState(0);
  const [userProfile, setUserProfile] = useState({
    username: "",
    email: "",
    dateOfBirth: "",
    phone: "",
    gender: "",
  });

  useEffect(() => {
    setUserIDD(userId);
    axios.get(`http://localhost:5000/api/user/${userId}`)
      .then((response) => {
        setUserProfile(response.data.message);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.profileWrapper}>
      <h1 className={styles.title}>
        User <span style={{ color: "#28A745" }}>Profile</span>
      </h1>
      <Avatar
        sizes="10"
        sx={{ bgcolor: "#28A745", width: 55, height: 55 }}
      >
        {Cookies.get("username").charAt(0).toUpperCase()}
      </Avatar>
     <div className={styles.infoWrapper}>
      <h3 className={styles.userInfoPart}><strong>User Id: </strong> {userIDD}</h3>
      <h3 className={styles.userInfoPart}><strong>Username: </strong> {userProfile.username}</h3>
      <h3 className={styles.userInfoPart}><strong>Email: </strong> {userProfile.email}</h3>
      <h3 className={styles.userInfoPart}><strong>Phone: </strong> {userProfile.phone}</h3>
      <h3 className={styles.userInfoPart}><strong>Date Of Birth: </strong> {userProfile.dateOfBirth}</h3>

      <h3 className={styles.userInfoPart}><strong>Gender: </strong> {userProfile.gender}</h3>
      </div>
    </div>
  );
}
