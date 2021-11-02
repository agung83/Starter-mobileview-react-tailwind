import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects'
import { setUser } from 'redux/modules/user/action';
import { getUser } from 'service/user'


function* handleGetUser() {
    try {
        const response: AxiosResponse = yield call(getUser)
        // console.log(response)
        const { data } = response;
        yield put(setUser(data))
    } catch (error) {
        yield put(setUser([{ name: 'Maaf error' }]))
    }
}


function* insertUser(payload: any) {
    try {
        console.log(payload)
    } catch (error) {
        console.log(error)
    }
}

export {
    handleGetUser,
    insertUser
}