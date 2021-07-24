import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Forks.scss';
import Avatar from '../Avatar';
import { getGistForks } from '../../store/actions/getGistForks';

function Forks(props) {
    const { forksUrl } = props;
    const { forks, isLoading, error } = useSelector((state) => state.forks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGistForks(forksUrl));
    }, [dispatch, forksUrl]);


    return(
        <div className="forks-container" >
            {
                isLoading ?
                    <h5 id="forks-loader">Loading...</h5>
                    :
                    !error ?
                        forks && forks.length ? 
                            <ul className="forks-list">
                                {forks.map((fork, index) => {
                                    return (
                                        <li key={fork.id + '_' + index} className="fork-item">
                                            <a href={`https://gist.github.com/${fork.id}`} target="_blank" rel="noopener noreferrer">
                                                <Avatar avatarUrl={fork.owner.avatar_url} name={fork.owner.login} />
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                            :
                            <>-</>
                        :
                        <div className="error">
                            <p id="fork-error-msg" className="text-danger">{error}</p>
                        </div>
            }
        </div>
    )


}

export default React.memo(Forks);