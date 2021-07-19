//data model structure for all GISTS
const initialState = {
    username: '',
    isLoading: false,
    error: null,
    gists: [],
    currentPage: null,
    currentGistsData:[],
}

const getUserGistsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'BEFORE_ALL_GISTS':
            return {...state, gists: [], isLoading: true, username: '', error: null, currentPage: null, currentGistsData: []};
        case 'ALL_GISTS_SUCCESS':
            return {...state, gists: [...action.payload], isLoading: false, username: action.username, error: null}
        case 'ALL_GISTS_ERROR':
            return {...state, gists: [], isLoading: false, username: action.username, error: action.errorMsg, currentPage: null, currentGistsData: []};
        case 'UPDATE_CURRENT_PAGE': 
            return {...state, currentGistsData: action.data,  currentPage: action.pageNumber}
        default:
            return state;
    }
}

export default getUserGistsReducer;