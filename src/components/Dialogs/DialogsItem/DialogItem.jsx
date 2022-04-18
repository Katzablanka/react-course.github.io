import React from 'react';
import { Grid, Paper, Box, Avatar, Typography } from '@mui/material';

import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div>
      <NavLink to={`/messages/${props.name}`}>
        <Grid container spacing={0.3} justifyContent="flex-start">
          <Grid item xs={3}>
            <Avatar src={props.ava} alt="photoURL" margin="0" />
          </Grid>
          <Grid item xs={9}>
            <Box>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {props.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {props.status}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </NavLink>
    </div>
  );
};
// {`/messages/${props.name}`}
export default DialogItem;
