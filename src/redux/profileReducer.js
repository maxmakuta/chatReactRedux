const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const addPost = 'ADD-POST';

let initialState = {
    posts: [
        {message: 'Hi, how are you? Hi, how are you?', name: "Maxim", id: 0, like: 211},
        {message: 'Its my first posts', name: "Maxim", id: 1, like: 20},
        {message: 'Its my first posts',name: "Maxim", id: 2, like: 20},
        {message: 'Its my first posts', name: "Maxim", id: 3, like: 20},
        {message: 'Its my first posts', name: "Maxim", id: 5, like: 20},
    ],
    newPostText: ""
}
const profileReducer =
    (state=initialState, action) => {

        switch (action.type) {
            case addPost:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 4,
                    like: 0, message: state.newPostText}]

            }

            case updateNewPostText:
            return {
                ...state,
                newPostText: action.newText
            }
            default:
                return state;
        }

        return state;
    }

export const addPostActionCreator = () => ({type: addPost});
export const updateNewPostTextActionCreator = (text) =>
    ({type: updateNewPostText, newText: text});

export default profileReducer;