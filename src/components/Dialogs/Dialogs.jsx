import { Grid, Paper, Box, Avatar, Typography } from '@mui/material';
import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogItem';

const Dialogs = (props) => {
  return (
    <div>
      <Grid container spacing={0.5} justifyContent="flex-start">
        <Grid item xs={3.5}>
          <DialogItem
            name="Katzablancka"
            status="online"
            ava="https://img-fotki.yandex.ru/get/9227/50652515.11/0_9f830_e9979222_L.jpg"
          />
          <DialogItem
            name="Rembo"
            status="online"
            ava="https://img-fotki.yandex.ru/get/9227/50652515.11/0_9f830_e9979222_L.jpg"
          />
          <DialogItem
            name="Jane Doe"
            status="offline"
            ava="https://img-fotki.yandex.ru/get/9227/50652515.11/0_9f830_e9979222_L.jpg"
          />
        </Grid>
        <Grid item xs={8.5}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          molestias beatae perspiciatis repudiandae minima architecto?
          Consequuntur laborum, quod totam quo et cum itaque labore amet
          incidunt quam recusandae? Et facilis repudiandae nostrum. Voluptatem,
          maxime magni ad distinctio quidem ipsum nisi!
        </Grid>
      </Grid>
    </div>
  );
};

export default Dialogs;
