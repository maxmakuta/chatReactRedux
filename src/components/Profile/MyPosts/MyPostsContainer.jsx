import React from 'react';

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPostElement = () => {
        props.store.dispatch(addPostActionCreator());
    };
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);

        props.store.dispatch(action);
    };

    return (<MyPosts updateNewPostText={onPostChange} addPost={addPostElement}
                     posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>

    );

}*/
let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        addPostElement: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text) => {
        dispatch(updateNewPostTextActionCreator(text))
    }

}

}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;