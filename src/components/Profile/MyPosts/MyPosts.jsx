import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form'
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FopmsControls/FormsControls";


const MyPosts = (props) => {

    let postElement = props.profilePage.map((m, key) => <Post post={m.message} name={"Maxim"} like={m.like} id={m.id}
                                                              key={key}/>);
     let newPostElement = React.createRef();



    const addNewPost = (values) => {

        props.addPostElement(values.newPostElement)
    }
        return (
            <div className={s.postItem}>
                <h3>My posts</h3>
                <div>
                    <PostReduxForm onSubmit={addNewPost}/>

                </div>
                <div className={s.posts}>
                    {postElement}
                </div>
            </div>
        )


}
const maxLength10 = maxLengthCreator (10)
const AddMyPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Write a message...'
                       component={Textarea}
                       name="newPostElement"
                validate={[required, maxLength10]}>
                </Field>
            </div>
            <div>
                <button>Add post </button>
            </div>
        </form>
    )
}
const PostReduxForm = reduxForm({form: "messegePostForm"})(AddMyPost)

export default MyPosts;