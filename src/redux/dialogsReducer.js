const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_MESSAGE_POST = 'ADD-MESSAGE-POST';

let initialState = {
    dialogs: [
        {name: "Max", id: 0,},
        {name: "Esenia", id: 1,},
        {name: "Es", id: 2,},
        {name: "Vitia", id: 3,},
        {name: "Sveta", id: 4,},
        {name: "Daria", id: 5,}
    ],
    messages: [
        {message: 'Hi!', id: 0,},
        {message: "Yo", id: 1,},
        {message: "Yo", id: 2,},
        {message: "Yo333", id: 3,},
        {message: "Yo444", id: 4,},
        {message: "Yo555", id: 5,}
    ],
    newPostMessage:""
}




const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:

            return {
                ...state,
                newPostMessage: '',
                messages: [...state.messages, {
                id: 4, message: state.newPostMessage
            }]

        }

        case ADD_MESSAGE_POST:

            return {
                ...state,
                newPostMessage: action.newText
            }


        default:
            return state;
    }

    return state;
}
export const updateNewMessageActionCreator = (text) =>
    ({type: ADD_MESSAGE_POST, newText: text});
export const addMesageActionCreator = () => ({type: ADD_MESSAGE})

export default dialogsReducer;