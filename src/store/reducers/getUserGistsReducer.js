// initial state model for users gists data
const initialState = {
    username: '',
    isLoading: false,
    error: null,
    gists: [],
    currentPage: null,
    currentGistsData:[],
}


// Reducers to process users gists data on the basis of action type
const getUserGistsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SHOW_LOADER':
            return {...state, gists: [], isLoading: true, username: '', error: null, currentPage: null, currentGistsData: []};
        case 'USER_GISTS_SUCCESS':
            return {...state, gists: [...action.data], isLoading: false, username: action.username, error: null}
        case 'USER_GISTS_ERROR':
            return {...state, gists: [], isLoading: false, username: action.username, error: action.errorMsg, currentPage: null, currentGistsData: []};
        case 'UPDATE_CURRENT_PAGE': 
            return {...state, currentGistsData: action.data,  currentPage: action.pageNumber}
        default:
            return state;
    }
}

export default getUserGistsReducer;