import React from 'react';

import {addMesageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";

import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,

    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMesageActionCreator());
        },
        onMessageChange: (text) => {
            dispatch(updateNewMessageActionCreator(text));

        }
    }};



    export default compose(
        connect(mapStateToProps, mapDispatchToProps),
        withAuthRedirect
    ) (Dialogs)