// initial state for gist forks
const initialState = {
    forks: [],
    isLoading: false,
    error: null,
}


// Reducers to process gist forks 
const getGistForksReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SHOW_FORKS_LOADER':
            return {...state, forks: [], isLoading: true,  error: null};
        case 'GET_FORKS_SUCCESS':
            return {...state, forks: [...action.data], isLoading: false, error: null}
        case 'GET_FORKS_ERROR':
            return {...state, forks: [], isLoading: false, error: action.errorMsg};
        default:
            return state;
    }
}

export default getGistForksReducer;