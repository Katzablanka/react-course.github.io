import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.page_content}>
      <section className={s.userInfo}>
        <div className={s.walpaper}>
          <img
            className={s.ava}
            src="https://cs9.pikabu.ru/post_img/big/2016/11/26/12/1480192824129447047.jpg"
            alt="avatarka"
          />
          <img
            className={s.background}
            src="https://groknation.com/wp-content/uploads/2018/09/apertism-536752-unsplash.jpg"
            alt="walpaper of the user"
          />
        </div>
      </section>
      <section>
        <div>
          <section className={s.userInfo}>
            <div>designer from San Francisco 23 y. o.</div>
          </section>
          <section>
            <MyPosts />
          </section>
        </div>
      </section>
    </div>
  );
};

export default Profile;
