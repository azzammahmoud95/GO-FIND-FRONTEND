import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from "axios";

const AdminsList = () => {
  const [locations, setLocations] = useState([]);
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    id: "",
    name: "",
    email: "",
  });
 
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/location")
      .then((response) => {
        setLocations(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [locations]);
 
  const handleClickOpen = (id) => {
    // Open the edit dialog and populate the form with the data of the selected location
    const selectedLocation = locations.find((location) => location.id === id);
    setFormValues({
      id: selectedLocation.id,
      name: selectedLocation.name,
    });
    setOpen(true);
  };

  const handleClose = () => {
    // Close the edit dialog and reset the form values
    setFormValues({
      id: "",
      name: "",

    });
    setOpen(false);

  };

  const handleEdit = (event) => {
    event.preventDefault();
    const id = formValues.id;
    const data = {
      name: formValues.name,
    };
    axios
      .put(`http://localhost:5000/api/location/${id}`, data)
      .then((response) => {
        // If the update was successful, update the list of locations and close the dialog
        const updatedLocations = locations.map((location) =>
          location.id === id ? response.data : location
        );
        setLocations(updatedLocations);
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/location/${id}`)
      .then((response) => {
        // If the deletion was successful, update the list of locations
        console.log(response.data);
        setLocations(locations.filter((location) => location.id !== id)); // Change location._id to location.id
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      sx={{
        padding: "50px",
        width: "60%",
        border: "1px solid rgba(109, 125, 147, 0.15)",
        boxShadow: "4px 4px 20px -10px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        bgcolor: "white",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Locations 
      </Typography>
      <Stack spacing="10px">
      {locations.map((location) => (
      <Box
        key={location._id}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: 2,
          borderBottom: "1px solid rgba(109, 125, 147, 0.15)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
            sx={{
              padding: "16px",
              borderRadius: "12px",
              maxWidth: "56px",
              maxHeight: "56px",
              bgcolor: "#26a3511a",
            }}
            >
             <LocationOnIcon color="success" />
                </Box>
                <Stack sx={{marginLeft:"30px"}}>
                    <Typography sx={{ fontWeight: "bold"}}>
                      {location.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "gray",
                        fontWeight: "500",
                        fontSize: "14px",
                      }}
                    >
                      {location.email}
                    </Typography>
                  </Stack>
        </Box>
        <Box sx={{ display: "flex",alignItems:"space-between" }}>
          <Button
          color="success"
            variant="outlined"
            size="small"
            sx={{
              border: "2px solid #28A745",
              color:'#28A745',
              borderRadius: "7px",
              width: "66px",
              height: "37px",
              fontWeight: "600",
              fontSize: "14px",
              textTransform: "none",
              marginRight:"50px"
            }}
            
            onClick={() => handleClickOpen(location.id)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{
              borderRadius: "6px",
              width: "66px",
              height: "37px",
              fontWeight: "600",
              fontSize: "14px",
              textTransform: "none",
              backgroundColor: "#28A745"
            }}
            onClick={() => handleDelete(location._id)}
          >
            Delete
          </Button>
        </Box>
      </Box>
    ))}
  </Stack>
  <Dialog open={open} onClose={handleClose}>
    <form onSubmit={handleEdit}>
    <DialogTitle style={{textAlign:"center", fontWeight:"600",color:"#394452"}}>Edit <Box display="inline" style={{color:'#28A745'}}>Location</Box></DialogTitle>     
     <DialogContent >
        <Stack spacing={4} style={{display:"flex",alignItems:"center",flexDirection:"column",width:"400px"}}>
          <TextField
          color="success"
            required
            sx={{marginTop:"5px"}}
            fullWidth
            label="Name"
            variant="outlined"
            value={formValues.name}
            onChange={(event) =>
              setFormValues({ ...formValues, name: event.target.value })
            }
          />

        </Stack>
      </DialogContent>
      <DialogActions style={{display:"flex",flexDirection:"row", justifyContent:"space-around",marginBottom:"20px"}}>
        <Button variant="outlined" onClick={handleClose} style={{ backgroundColor: "#FFF", width: "120px",borderRadius: '10px',color:"#28A745",fontWeight:"600",border:'2px solid #28A745' }} color="success">Cancel</Button>
        <Button type="submit"
         style={{ backgroundColor: "#28A745",
          width: "120px",
          borderRadius: '10px',
          color:"#FFF",fontWeight:"600" }} variant="outlined">
          Save
        </Button>
      </DialogActions>
    </form>
  </Dialog>
</Box>
);
};

export default AdminsList;