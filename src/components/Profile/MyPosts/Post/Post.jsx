import React from 'react';
import s from './Post.module.css';


const Post = (props) => {

    return (
        <div className={s.item}>
            <div>
                <img src='https://image.flaticon.com/icons/svg/145/145859.svg'/>
                <p>{props.name}</p>
            </div>
            <div className={s.post}>
                <p>{props.post}</p>

                <span>like {props.like}</span>
            </div>


        </div>
    )
}

export default Post;