import { combineReducers } from 'redux';
import authUser from './auth/reducer';
import { reducer as toastr } from 'react-redux-toastr'

const reducers = combineReducers({
    authUser,
    toastr
});

export default reducers;