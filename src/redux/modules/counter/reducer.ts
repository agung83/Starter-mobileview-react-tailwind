import { increment, decrement } from './initialconst'

const initialState = {
    value: 0,
};

type Action = any;

export default function reducer(state = initialState, actions: Action) {
    // console.log(actions)
    switch (actions.type) {
        case increment:
            return {
                ...state,
                value: state.value + 1
            };
        case decrement:
            return {
                ...state,
                value: state.value - 1
            };
        default:
            return state;
    }
}
