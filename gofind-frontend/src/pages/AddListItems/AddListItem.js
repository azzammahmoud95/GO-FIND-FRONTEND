import React, { useEffect, useState } from "react";
import styles from "./AddListItems.module.css";
import { Button } from "@mui/base";
import {
  TextField,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Avatar,
} from "@mui/material";
import axios from "axios";
export default function AddListItems() {
  //   const location = [
  //     {
  //       id: "1",
  //       name: "Akkar",
  //     },
  //     {
  //       id: "2",
  //       name: "Tripoli",
  //     },
  //   ];
  const [email, setEmail ] = useState('')
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState(0)
  const [ title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [ dateFound, setDatefound] = useState('');
  const [description, setDescription] = useState('')

  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("");
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/location")
      .then((response) => {
        setLocations(response.data.message);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/category")
      .then((response) => {
        setCategories(response.data.message);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <section style={{ display: "flex", justifyContent: "center" }}>
        <form
          className={styles.FromAdd}
          style={{ boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)" }}
        >
          <h1>
            Post The <span style={{ color: "#28A745" }}>Founded Item</span>
          </h1>
          <Stack
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            flexDirection="row"
            style={{ width: "100%" }}
          >
            <Avatar sizes="10" sx={{ width: 55, height: 55 }} />
            <TextField
              type="text"
              label="User Name"
              color="success"
              fullWidth
              style={{ width: "95%" }}
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}

            />
          </Stack>
          <Stack
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
            style={{ width: "100%" }}
          >
            <TextField
              label="Email"
              color="success"
              fullWidth
              type="email"
              style={{ width: "49%" }}
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              label="phone"
              color="success"
              fullWidth
              type="number"
              style={{ width: "49%" }}
              required
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </Stack>
          <Stack
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
            style={{ width: "100%" }}
          >
            <TextField
              type="text"
              label="Title"
              color="success"
              fullWidth
              required
              style={{ width: "49%" }}
              value={title}
              onChange={(event) => setTitle(event.target.value)}

            />
            <TextField
              type="date"
              label="Date Founded"
              color="success"
              fullWidth
              required
              focused
              style={{ width: "49%" }}
              value={dateFound}
              onChange={(event) => setDatefound(event.target.value)}

            />
          </Stack>
          <TextField
            type="file"
            style={{ width: "100%" }}
            color="success"
            label="Image"
            focused
            value={image}
            onChange={(event) => setImage(event.target.value)}

          />
          <Stack
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
            style={{ width: "100%" }}
          >
            <FormControl
              style={{ width: "49%" }}
              label="category"
              color="success"
              fullWidth
            >
              <InputLabel id="category-select-label">category</InputLabel>
              <Select
                labelId="category-select-label"
                id="category-select"
                required
                label="Category"
                value={selectedCategories}
                onChange={(event) => setSelectedCategories(event.target.value)}
              >
                {Array.isArray(categories) &&
                  categories.map((category) => (
                    <MenuItem key={category._id} value={category._id}>
                      {category.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            <FormControl
              style={{ width: "49%" }}
              label="Location"
              color="success"
              fullWidth
            >
              <InputLabel id="location-select-label">Location</InputLabel>
              <Select
                labelId="location-select-label"
                id="location-select"
                required
                label="Location"
                value={selectedLocation}
                onChange={(event) => setSelectedLocation(event.target.value)}
              >
                {Array.isArray(locations) &&
                  locations.map((location) => (
                    <MenuItem key={location._id} value={location._id}>
                      {location.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Stack>
          <TextField
            label="Description"
            color="success"
            fullWidth
            rows={4}
            multiline
            value={description}
            onChange={(event) => setDescription(event.target.value)}

          />
          <Stack
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            flexDirection="row"
            style={{ width: "100%" }}
          >
            <Button
              style={{
                backgroundColor: "#FFF",
                width: "170px",
                borderRadius: "12px",
                color: "#28A745",
                fontWeight: "700",
                height: "40px",
                border: "1px solid green",
                fontSize: "17px",
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.2)",
              }}
              variant="outlined"
              type="reset"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              style={{
                backgroundColor: "#28A745",
                width: "170px",
                borderRadius: "12px",
                color: "#FFF",
                fontWeight: "700",
                height: "40px",
                border: "1px solid whitesmoke",
                fontSize: "17px",
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.2)",
              }}
              variant="outlined"
            >
              Post Item
            </Button>
          </Stack>
        </form>
      </section>
    </>
  );
}
