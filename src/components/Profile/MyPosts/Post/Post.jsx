import React from 'react';
import s from './Post.module.css';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const Post = (props) => {
  return (
    <div className={s.item}>
      {/* <img className={s.comentAva} src="https://img-fotki.yandex.ru/get/9227/50652515.11/0_9f830_e9979222_L.jpg" alt="ava"/>
      <Avatar src="https://img-fotki.yandex.ru/get/9227/50652515.11/0_9f830_e9979222_L.jpg"></Avatar>
      <div className={s.comentText}>
        {props.message}
        <span>
          <h4>{props.like}</h4>
        </span>
      </div> */}
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <Avatar src="https://img-fotki.yandex.ru/get/9227/50652515.11/0_9f830_e9979222_L.jpg"></Avatar>
        </Grid>
        <Grid item xs={11}>
          <div className={s.comentText}>
            {props.message}
            <span>
              <h4>{props.like}</h4>
            </span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Post;
