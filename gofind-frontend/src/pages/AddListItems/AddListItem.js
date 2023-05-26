import React, { useEffect, useState } from "react";
import styles from "./AddListItems.module.css";

// import axios from "axios";
import Cookies from "js-cookie";
import EditDeletePost from "../../components/EditDeletePost/EditDeletePost";
import UserProfile from "../../components/userProfile/UserProfile";
export default function AddListItems() {

  const [userId, setUserId] = useState("");


  

  useEffect(() => {
    const userIdFromCookie = Cookies.get("userId");
    if (userIdFromCookie) {
      setUserId(userIdFromCookie);
    }
  }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append("title", title);
  //   formData.append("userId", userId);
  //   formData.append("image", image);
  //   formData.append("categoryId", selectedCategories);
  //   formData.append("locationId", selectedLocation);
  //   formData.append("dateFound", dateFound);
  //   formData.append("description", description);
  //   console.log(formData);
  //   axios
  //     .post("http://localhost:5000/api/item/additem", formData)
  //     .then((response) => {
  //       console.log(response);
  //       setTitle("");
  //       setImage(null);
  //       setSelectedCategories("");
  //       setSelectedLocation("");
  //       setDatefound("");
  //       setDescription("");
  //       setSuccessAlert(true);
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent:'space-around'
        }}
      >
        
        <section className={styles.userProfile} style={{ boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)",height:'100%' }}>
              <UserProfile />
        </section>
        <section className={styles.FromAdd} style={{ boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)",height:'100%' }}>
              <EditDeletePost  />
        </section>
        
      </section>
      
      
    </>
  );
}
