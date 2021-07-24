import React from 'react';
import Drawer from '@material-ui/core/Drawer';

import './SideDrawer.scss';
import Forks from '../Forks';


function SideDrawer(props) {
    const {showDrawer, openSideDrawer, gistData} = props;
    const files = gistData.files ? Object.keys(gistData.files) : [];

    return (
        <Drawer anchor="right" open={showDrawer} onClose={() => openSideDrawer({})}>
                <div className="side-drawer">
                    <div className="gist-details">
                        <h3 className="title">{gistData.description}</h3>
                        <div className="files-box">
                            <h4 >Files:</h4>
                            <ul className="files-list">
                                {files.map((key, ind) => {
                                    return (
                                        <li key={key + '_' + ind} className="file-item">
                                            <a href={gistData.files[key].raw_url} target="_blank" className="file-link" rel="noopener noreferrer">
                                                {gistData.files[key].filename}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="forks-details">
                            <h4 >Forks:</h4>
                            <Forks forksUrl={gistData.forks_url} />
                        </div>
                    </div>

                </div>
            </Drawer>
    )
}

export default SideDrawer;