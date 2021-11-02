import { increment, decrement } from './initialconst'


export interface IAction<T> {
    type: string;
    payload: T;
}

export function tambahSatu() {
    return {
        type: increment
    };
}

export function kurangSatu() {
    return {
        type: decrement
    }
}


