import { combineReducers } from 'redux';
import userGists from './getUserGistsReducer';

const rootReducer = combineReducers({userGists});
export default rootReducer;