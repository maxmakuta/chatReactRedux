import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objectHelpers";


const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE= 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT= 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING= 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};


let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray (state.users, action.userId, "id", {followed: true}  )

            }
        case  UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray (state.users, action.userId, "id", {followed: false}  )

            }
        case
        SET_USERS: {
            return {...state, users: action.users}
        }
        case
        SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case
        SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case
        TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        TOGGLE_IS_FOLLOWING_PROGRESS: {
                return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
        }
    }
        default:
            return state;
    }

}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) =>({type: SET_CURRENT_PAGE,currentPage})
export const setTotalUsersCount = (totalUsersCount) =>({type: SET_TOTAL_USERS_COUNT,totalCount: totalUsersCount})
export const toggleIsFetching = (isFetching) =>({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) =>({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await usersAPI.getUsers(page, pageSize)
            dispatch(toggleIsFetching(false));
            dispatch(setCurrentPage(page));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));

    }
}

const followUnfollow = async (userId, dispatch, apiMethod, actionCreators ) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode == 0) {
        dispatch(actionCreators(userId));
    }
        dispatch(toggleFollowingProgress(false, userId));
}


export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollow (userId, dispatch, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollow (userId, dispatch, usersAPI.follow.bind(usersAPI), followSuccess )
    }
}


export default usersReducer;