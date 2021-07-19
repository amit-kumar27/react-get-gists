import React, { useEffect } from 'react';
import './GistFileInfoCard.scss';
import { Link } from 'react-router-dom'
import Tags from '../Tags';

function GistFileInfoCard(props) {
    const {gistData} = props;
    const files = Object.keys(gistData.files);

	return (
		<div className="gist-file-info-card">
            <Link to={{pathname: `/${gistData.id}`, state: {description: gistData.description, files: gistData.files}}} 
                className="gist-link">
                <div className="info">
                    {
                        files.map( filekey => (
                            <li className="list-row">
                                <p className="file-desc">{gistData.files[filekey].filename || '-'}</p>
                            </li>
                        ))
                    }
                    <p className="file-count">{files.length} {(files.length > 1) ? 'Files' : 'File'}</p>
                </div>
                <Tags files={gistData.files}/>
            </Link>
		</div>
	);
}

export default GistFileInfoCard;
