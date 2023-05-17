import React from "react";
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
export default function AddListItems() {
  const location = [
    {
      id: "1",
      name: "Akkar",
    },
    {
      id: "2",
      name: "Tripoli",
    },
  ];
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
            alignItems='center'
            flexDirection="row"
            style={{ width: "100%" }}
          >
            <Avatar sizes="10" sx={{ width: 55, height: 55 }}/>
            <TextField
            type="text"
            label="User Name"
            color="success"
            fullWidth
            style={{width: "95%"}}
            required

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
            />
            <TextField
              label="phone"
              color="success"
              fullWidth
              type="number"
              style={{ width: "49%" }}
              required
            />
            
          </Stack>
          <TextField
            type="text"
            label="Title"
            color="success"
            fullWidth
            required
          />
          <Stack
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
            style={{ width: "100%" }}
          >
            <TextField
              label="Date Found"
              color="success"
              fullWidth
              type="date"
              focused
              style={{ width: "49%" }}
              required
            />

            <FormControl
              style={{ width: "49%" }}
              label="Location"
              color="success"
              fullWidth
            >
              <InputLabel id="title-select-label">Location</InputLabel>
              <Select
                labelId="location-select-label"
                id="location-select"
                required
                label="Location"
              >
                <MenuItem value={"Azzam"}>Azzam</MenuItem>
                <MenuItem value={"hassan"}>Hassan</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <TextField
            label="Description"
            color="success"
            fullWidth
            rows={4}
            multiline
          />
          
          {/* <Button
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
              Login
            </Button> */}
        </form>
      </section>
    </>
  );
}
