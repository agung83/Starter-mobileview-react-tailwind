import { SET_USER, GET_USER, CREATE_USER } from "./initialconst"



const getUser = () => {
    return {
        type: GET_USER
    }
}


const setUser = (payload: any) => {
    return {
        type: SET_USER,
        payload,
    }
}


const createUser = (payload: any) => {
    return {
        type: CREATE_USER,
        payload,
    }
}


export { getUser, setUser, createUser }

