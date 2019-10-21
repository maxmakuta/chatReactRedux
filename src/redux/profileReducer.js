import {usersAPI} from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {message: 'Hi, how are you? Hi, how are you?', name: "Maxim", id: 0, like: 211},
        {message: 'Its my first posts', name: "Maxim", id: 1, like: 20},
        {message: 'Its my first posts',name: "Maxim", id: 2, like: 20},
        {message: 'Its my first posts', name: "Maxim", id: 3, like: 20},
        {message: 'Its my first posts', name: "Maxim", id: 5, like: 20},
    ],
    newPostText: "",
    profile: null
}
const profileReducer =
    (state=initialState, action) => {

        switch (action.type) {
            case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 4,
                    like: 0, message: state.newPostText}]

            }

            case UPDATE_NEW_POST_TEXT:
                return {
                    ...state,
                    newPostText: action.newText
                }
            case SET_USER_PROFILE:
                return {
                    ...state,
                    profile: action.profile
                }
            default:
                return state;
        }

        return state;
    }

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile});
export const getUserProfile = (userId) => (dispatch)  => {
    usersAPI.getPtofile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}

export default profileReducer;