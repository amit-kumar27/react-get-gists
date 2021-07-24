import { get } from '../../fetch';

//action to show loader
export const showLoader = () => {
    return {
        type: 'SHOW_LOADER'
    }
}

// action to store the data after fetching Gists data
export const userGistsSuccess = (data, username) => {
    return {
        type: 'USER_GISTS_SUCCESS',
        data,
        username,
        isLoading: false
    }
}

// action to process the error while fetching Gists data
export const userGistsError = (err) => {
    return {
        type: 'USER_GISTS_ERROR',
        errorMsg: err,
        isLoading: false
    }
}

// action to update the current page of Pagination 
export const updateCurrentPageAction = (pageNumber, currentData) => {
    return {
        type: 'UPDATE_CURRENT_PAGE',
        pageNumber,
        data: currentData
    }
}

// middleware function to make API call 
export const getUserGists = (username) => {
    return function(dispatch) {
        dispatch(showLoader());
        //API GET call
        return get(`https://api.github.com/users/${username}/gists`)
                // if data fetched successfully
                .then((res) => {
                    dispatch(userGistsSuccess(res, username));
                })
                // if some error occurred in data fetching
                .catch((err) => {
                    dispatch(userGistsError('Something went wrong!')); 
                });
    }
}
