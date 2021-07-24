import React from 'react';
import './GistFileInfoCard.scss';
import Tags from '../Tags';

function GistFileInfoCard(props) {
    const { gistData, onGistCardClick } = props;
    const files = Object.keys(gistData.files);

    return (
        <>
            <div id="info-card" className="gist-file-info-card" onClick={onGistCardClick}>
                <div className="gist-data">
                    <div className="info">
                        {
                            files.map((filekey, ind) => (
                                <li className="list-row" key={filekey + '_' + ind} >
                                    <p className="file-desc">{gistData.files[filekey].filename || '-'}</p>
                                </li>
                            ))
                        }
                        <p className="file-count">{files.length} {(files.length > 1) ? 'Files' : 'File'}</p>
                    </div>
                    <Tags files={gistData.files} />
                </div>
            </div>
            
        </>
    );
}

export default React.memo(GistFileInfoCard);
