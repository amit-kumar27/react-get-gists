import { get } from '../../fetch';

//action to show loader while forks loading
export const showForksLoader = () => {
    return {
        type: 'SHOW_FORKS_LOADER'
    }
}

// action to store the data after fetching Forks for gist
export const getForksSuccess = (data) => {
    return {
        type: 'GET_FORKS_SUCCESS',
        data,
        isLoading: false
    }
}

// action to process the error while fetching Forks for gist
export const getForksError = (err) => {
    return {
        type: 'GET_FORKS_ERROR',
        errorMsg: err,
        isLoading: false
    }
}


// middleware function to make API call to fetch Forks for given gist
export const getGistForks = (url) => {
    return function(dispatch) {
        dispatch(showForksLoader());
        //API GET call
        return get(url)
                // if data fetched successfully
                .then((res) => {
                    dispatch(getForksSuccess(res));
                })
                // if some error occurred in data fetching
                .catch((err) => {
                    dispatch(getForksError('Something went wrong!')); 
                });
    }
}
