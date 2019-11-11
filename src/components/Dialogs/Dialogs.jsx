import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {Field, reduxForm} from 'redux-form'
import {Textarea} from "../common/FopmsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {

    let messagesElement = props.messagesPage.messages.map((m, key) => <Message message={m.message} id={m.id}
                                                                               key={key}/>);
    let nameElement = props.messagesPage.dialogs.map((n, key) => <DialogItem name={n.name} id={n.id} key={key}/>);




    const addNewMessage = (values) => {
        props.addMessage(values.newMessageElement)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {nameElement}
            </div>
            <div>
                <div className={s.messages}>
                    {messagesElement}
                </div>
                <MessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
const maxLength10 = maxLengthCreator (10)
const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  placeholder='Write a message...'
                       component={Textarea}
                       name="newMessageElement"
                        validate={[required, maxLength10]}>
                </Field>
            </div>
            <div>
                <button >Add message</button>
            </div>
        </form>
    )
}
const MessageReduxForm = reduxForm({form: "messegeDialogsForm"})(AddMessageForm)
export default Dialogs;