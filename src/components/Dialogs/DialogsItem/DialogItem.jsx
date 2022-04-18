import React from 'react';
import { Grid, MenuItem, Box, Avatar, Typography } from '@mui/material';

import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';
const DialogItem = (props) => {
  return (
    <div className={s.dialogBox}>
      <MenuItem>
        <NavLink to={`/messages/${props.name}`}>
          <Grid
            container
            spacing={0.3}
            justifyContent="flex-start"
            className="messageD"
          >
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
      </MenuItem>
    </div>
  );
};
// {`/messages/${props.name}`}
export default DialogItem;
