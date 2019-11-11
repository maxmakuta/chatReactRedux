import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {updateStatus} from "../../redux/profileReducer";


const Profile = (props) => {


    return (
        <div>
            <ProfileInfo profile={props.profile} updateStatus={props.updateStatus} status={props.status}/>
            <MyPostsContainer/>

        </div>

    )
}

export default Profile;