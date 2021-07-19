// Generic get call using 'fetch' API
export const get = (url) => {
    return fetch(url)
                .then( rawResp => {
                    return rawResp.json();
                })
                .catch( err => {
                    throw new Error('Something went wrong!');
                })
}