import React, { useState } from 'react';
import './SearchResult.scss';
import { useSelector } from 'react-redux';

import GistFileInfoCard from '../GistFileInfoCard';
import Pagination from '../Pagination';
import SideDrawer from '../SideDrawer';

function SearchResult() {
	const {gists, username, error, isLoading, currentGistsData} = useSelector((state) => state.userGists);
	
	const [showDrawer, setShowDrawer] = useState(false);
	const [selectedGist, setSelectedGist] = useState({});

    const openSideDrawer = (gist) => {
		setSelectedGist(gist);
        setShowDrawer(!showDrawer);
    }

	return (
		<div className="search-result-container">
		{
			isLoading   
			? <h4 className="loader" id="loader">Loading...</h4>
			
			:
			
			!error ?
				gists && gists.length && username ? 
				(
					<>
						<div id="result-count" className="search-result-count" >
							<p className="text" >
								<b>{gists.length}</b> results found for <b>{username}</b>
							</p>
						</div>
						<ul className="result-list">
							{currentGistsData.map( gist => (
								<GistFileInfoCard key={gist.id} 
									gistData={gist} 
									onGistCardClick={() => openSideDrawer(gist)} 
								/>
							))}
						</ul>
						<Pagination totalCount={gists.length} data={gists} />
						<SideDrawer showDrawer={showDrawer} openSideDrawer={openSideDrawer} gistData={selectedGist} />
					</>
				) 
				: username ? (<p id="no-data-msg"><b>0{gists}</b> results found for <b>{username}</b></p>) : null
				
			: 
			(
				<div className="error">
					<p id="error-msg" className="text-danger">{error}</p>
				</div>
			)
		
		}
		</div>
	);
}

export default React.memo(SearchResult);
