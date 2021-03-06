import {profileAPI, usersAPI} from "../api/api";


const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'

let initialState = {
    posts: [
        {message: 'Hi, how are you? Hi, how are you?', name: "Maxim", id: 0, like: 211},
        {message: 'Its my first posts', name: "Maxim", id: 1, like: 20},
        {message: 'Its my first posts',name: "Maxim", id: 2, like: 20},
        {message: 'Its my first posts', name: "Maxim", id: 3, like: 20},
        {message: 'Its my first posts', name: "Maxim", id: 5, like: 20},
    ],

    profile: null,
    status: ""
}
const profileReducer =
    (state=initialState, action) => {

        switch (action.type) {
            case ADD_POST:
            return {
                ...state,

                posts: [...state.posts, {id: 4,
                    like: 0, message: action.newPostElement}]

            }


            case SET_USER_PROFILE:
                return {
                    ...state,
                    profile: action.profile
                }
                case SET_STATUS:
                return {
                    ...state,
                    status: action.status
                }

            default:
                return state;
        }

        return state;
    }

export const addPostActionCreator = (newPostElement) => ({type: ADD_POST, newPostElement});

export const setStatus = (status) =>
    ({type: SET_STATUS, status});

export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile});

export const getUserProfile = (userId) => async (dispatch)  => {
    const response = await usersAPI.getPtofile(userId)
        dispatch(setUserProfile(response.data));

}

export const getStatus = (userId) => async (dispatch)  => {
    const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));

}
export const updateStatus = (status) => async (dispatch)  => {
    const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0)
        dispatch(setStatus(status));

}

export default profileReducer;