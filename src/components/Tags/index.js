import React, { useState, useEffect } from 'react';
import './Tags.scss';

function Tags(props) {
    const {files} = props;
    const [fileTypes, setFileTypes] = useState([]);

    useEffect(() => {
        const types = new Set();
        Object.keys(files).forEach( fileKey => {
            let lang = files[fileKey].language;
            if(lang) {
                types.add(lang);
            }
        })
        setFileTypes(Array.from(types));
    }, [files]);

	return (
		<div className="tags">
            {
                fileTypes.map( type => (
                    <li className="tag">
                        {type}
                    </li>
                ))
            }
		</div>
	);
}

export default Tags;
