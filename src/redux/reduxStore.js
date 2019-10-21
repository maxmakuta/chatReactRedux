import {combineReducers, createStore, applyMiddleware} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"


let redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});
let store = createStore (redusers, applyMiddleware(thunkMiddleware));

window.store=store;
export default store;

