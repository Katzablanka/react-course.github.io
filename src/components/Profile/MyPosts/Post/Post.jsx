import React from 'react'
import  s from './Post.module.css'

const Post=(props)=>{
    return(
     
        
         
          <div className={s.item}>
            <img className={s.comentAva} src="https://img-fotki.yandex.ru/get/9227/50652515.11/0_9f830_e9979222_L.jpg" alt="ava"/>
            <div className={s.comentText}>  
                {props.message}
                <span><h4>{props.like}</h4></span>
            </div>
          </div>
          
       
      
    );

}

export default Post;




