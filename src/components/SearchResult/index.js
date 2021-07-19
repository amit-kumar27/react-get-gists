import React, { useEffect } from 'react';
import './SearchResult.scss';
import { useSelector } from 'react-redux';

import GistFileInfoCard from '../GistFileInfoCard';

function SearchResult() {
	const {gists, username, error, isLoading} = useSelector((state) => state.userGists);

	// useEffect(() => {

	// }, [gists]);


	return (
		<div className="search-result-container">
		{
			isLoading   
			? <h4>Loading...</h4>
			
			:
			
			gists.length && !error ? (
                <>
                    <div className="search-result-count">
                        <p className="text">
                            <strong>{gists.length}</strong> results found for <strong>{username}</strong>
                        </p>
                    </div>
                    <ul className="result-list">
                        {gists.map( gist => {
                            return (<GistFileInfoCard 
                                            key={gist.id} 
                                            gistData={gist}/>);
                        })}
                    </ul>
                </>
            ) : (
                <div className="error">
                    <p className="text-danger">{error}</p>
                </div>
            )
		
		}
		</div>
	);
}

export default SearchResult;
