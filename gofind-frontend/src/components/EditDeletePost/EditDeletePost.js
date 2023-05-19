import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import styles from './EditDeletePost.module.css'
import axios from 'axios';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function EditDeletePost() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [notFoundItem,setNotFoundItem] = useState([])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleEdit = () => {
    setOpen(true);
  };

  const handleDelete = () => {
    // Perform delete operation
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/item')
      .then((response) => {
        setNotFoundItem(response.data.message);
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          textColor="inherit"
          TabIndicatorProps={{
            style: {
              backgroundColor: '#28A745',
            },
          }}
        >
          <Tab label="Items Posted" />
          <Tab label="Items Founded" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {notFoundItem.map((notFoundItem) => (
          <Box
            key={notFoundItem.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: 2,
              borderBottom: '1px solid rgba(109, 125, 147, 0.15)',
              flexWrap:'wrap',
            }}
            className={styles.cardContainer}
          >
              <img
                  src={`http://localhost:5000/api/item/${notFoundItem.image}`}
                  alt="Image"
                  width={200}
                  height={100}
                />
              <Typography variant="h6" >{notFoundItem.title.substring(0,10)+`..`}</Typography>
              <Typography variant="body1">{notFoundItem.description.substring(0,10)+`..`}</Typography>
              <Typography variant="body1">{notFoundItem.categoryId.name.substring(0,10)+`..`}</Typography>
              <Typography variant="body1">{notFoundItem.locationId.name.substring(0,10)+`..`}</Typography>
              <Typography variant="body1">{notFoundItem.dateFound.substring(0,10)}</Typography>

            <div>
              <Button
                style={{border:'2px solid green',borderRadius:'7px'}}
                onClick={handleEdit}
                color="success"
                
              >
                Edit
              </Button>
              <Button
                variant="contained"
                onClick={handleDelete}
                color="success"
                style={{marginLeft:"4px",borderRadius:'7px'}}
              >
                Delete
              </Button>
            </div>
          </Box>
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            color="success"
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            color="success"
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose} color="success">Cancel</Button>
          <Button onClick={handleClose} variant="contained" color="success" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
