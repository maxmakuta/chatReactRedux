import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";



const ADD_MESSAGE_POST = 'ADD-MESSAGE-POST';

let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hi, how are you?', name: "Esenia", id: 0, like: 25},
                {message: 'Its my first posts', id: 1, like: 20},
                {message: 'Its my first posts', id: 2, like: 20},
                {message: 'Its my first posts', id: 3, like: 20},
                {message: 'Its my first posts', id: 5, like: 20},
            ],

            newPostText: "it=kama"

        },
        messagesPage: {
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

    },
    _callSubscriber ()  {
        console.log("mmmmmmmmmm")
    },
    getState(){
        return this._state;
    },
    subscribe (observer)  {
        this._callSubscriber = observer;
    },

    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);
        }

    }



window.store = store;

// export default store;