import { combineReducers } from "redux";

import auth from './modules/auth/reducer'
import counter from './modules/counter/reducer'
import user from './modules/user/reducer'

export default combineReducers({
    auth,
    counter,
    user
})

