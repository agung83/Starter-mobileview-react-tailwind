import { CREATE_USER, SET_USER } from "./initialconst";



const initialState = {
    users: undefined,
    status: "",
}

type Action = any;

export default function reducer(state = initialState, actions: Action) {
    // console.log(actions)
    switch (actions.type) {
        case SET_USER:
            return {
                ...state,
                users: actions.payload,
                status: "oke dude",
            };
        case CREATE_USER:
            return {
                ...state,
                users: [],
                status: "oke"
            };

        default:
            return state;
    }
}