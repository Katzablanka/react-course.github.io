import { Typography, Button } from '@mui/material';
import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h5"
        align="left"
        gutterBottom
      >
        Create a new note
      </Typography>
      <Button variant="outlined" color="primary" type="submit">
        submit
      </Button>
    </div>
  );
};

export default Dialogs;
