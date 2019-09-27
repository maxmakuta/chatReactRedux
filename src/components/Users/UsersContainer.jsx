import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/UsersReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        unfollow: (userId) => {
            dispatch(followAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
