import React from 'react';
import './Avatar.scss';

function Avatar(props) {
    const {avatarUrl, name} = props;
    return (
        <div id="avatar-box" className="avatar-container">
            <img id="avatar" className="avatar-img" width="62" height="62" src={avatarUrl} alt={name} />
            <span id="username" className="username">{name}</span>
        </div>
        
    )
}

export default React.memo(Avatar);