import { combineReducers } from 'redux';
import userGists from './getUserGistsReducer';
import forks from './getGistForksReducer';

const rootReducer = combineReducers({
    userGists,
    forks
});
export default rootReducer;