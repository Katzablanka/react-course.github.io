import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.posts}>
      <h2>my posts</h2>
      <h3>new post</h3>
      <textarea name="" id=""></textarea>
      <button>add post</button>
      <button>remove</button>
      <Post message="das ist die Prüfung von GitHub" like="20" />
      <Post message="ich bin Anna und ich bin 19 Jahre alt" like="20" />
      <Post message="Heute es ist windig" like="50" />
      <Post message="Ich habe kein Lust" like="45" />
      <Post message="Wie geht es ihnen?" like="3" />
      <Post message="Das ist mein erstes Post" like="5" />
      <Post
        message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores maxime architecto aspernatur corporis commodi laudantium nulla, vero at aperiam adipisci autem. Voluptatibus tenetur repellendus doloribus sit eligendi velit nisi pariatur!"
        like="100"
      />
    </div>
  );
};

export default MyPosts;
