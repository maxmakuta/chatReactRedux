import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {addMesageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";




const Dialogs = (props) => {

    let messagesElement = props.messagesPage.messages.map((m,key) => <Message message={m.message} id={m.id} key={key}/>);
    let nameElement = props.messagesPage.dialogs.map((n,key) => <DialogItem name={n.name} id={n.id} key={key}/>);
    let newPostMessage = props.messagesPage.newPostMessage;

    let newMessageElement = React.createRef();
    let onaddMessage = () => {
        props.addMessage();
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.onMessageChange(text);
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {nameElement}
            </div>
            <div>
                <div className={s.messages}>
                    {messagesElement}

                </div>

                <div>
                    <textarea rows="10" cols="70" placeholder='Write a message...'  onChange={onMessageChange} ref={newMessageElement}
                              value={props.messagesPage.newPostMessage}></textarea>
                </div>
                <div>
                    <button onClick={onaddMessage}>Add message</button>
                </div>


            </div>
        </div>
    )
}


export default Dialogs;