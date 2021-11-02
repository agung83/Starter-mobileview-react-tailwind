import { takeEvery } from "redux-saga/effects";
import { CREATE_USER, GET_USER } from "redux/modules/user/initialconst";
import { handleGetUser, insertUser } from "./handlers/user";



export function* watcherSaga() {
    yield takeEvery(GET_USER, handleGetUser)
    yield takeEvery(CREATE_USER, insertUser)
}