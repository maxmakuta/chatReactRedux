import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';





const MyPosts = (props) => {
    let postElement = props.profilePage.map((m,key) => <Post  post={m.message} name={"Maxim"} like={m.like} id={m.id} key={key}/>);
    let newPostElement = React.createRef();

    let onaddPostElement = () => {
        props.addPostElement();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    };

    return (
        <div className={s.postItem}>
            <h3>My posts</h3>
            <div>
                <div >
                    <textarea rows="10" cols="190" placeholder='Write a message...' onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onaddPostElement}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )

}

export default MyPosts;