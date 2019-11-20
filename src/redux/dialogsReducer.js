const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';


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
    ]
}




const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:

            return {
                ...state,
                messages: [...state.messages, {
                id: 4, message: action.newMessageElement
            }]

        }
        default:
            return state;
    }

    return state;
}

export const addMesageActionCreator = (newMessageElement) => ({type: ADD_MESSAGE, newMessageElement})

export default dialogsReducer;