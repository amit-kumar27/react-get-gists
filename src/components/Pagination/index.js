import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Pagination.scss';


import { PAGINATION_LIMIT } from '../../constants/constants';
import { updateCurrentPageAction } from '../../store/actions/getUserGists';

function Pagination(props) {
    const {totalCount, data} = props;
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        if(data.length <= PAGINATION_LIMIT) {
            dispatch(updateCurrentPageAction(1, data));
        }
        else {
            dispatch(updateCurrentPageAction(1, data.slice(0, PAGINATION_LIMIT) ));
        }
    }, [data, dispatch]);

    const updateCurrentPage = (num) => {
        if(totalCount && 0 < num && num <= Math.ceil(totalCount/PAGINATION_LIMIT)) {
            setCurrentPage(num);
            if(data.length <= PAGINATION_LIMIT) {
                dispatch(updateCurrentPageAction(1, data));
            }
            else if(data.length <= PAGINATION_LIMIT*num){
                dispatch(updateCurrentPageAction(num, data.slice(PAGINATION_LIMIT* (num-1)) ));
            }
            else {
                dispatch(updateCurrentPageAction(num, data.slice(PAGINATION_LIMIT* (num-1), PAGINATION_LIMIT*num) ));
            }
        }
    }

    const getPageNumbers = () => {
        if(totalCount && PAGINATION_LIMIT) {
            const lastPage = Math.ceil(totalCount/PAGINATION_LIMIT);
            const numbers = [];
            for(let i = 1; i <= lastPage; i++) {
                numbers.push(
                    <li 
                        key={'page'+i}
                        className={'page-number ' + ((i === currentPage) ? 'active' :'')}
                        onClick={() => updateCurrentPage(i)}>
                            {i}
                    </li>
                );
            }
            return numbers;
        }
        return null;
    }

	return (
		<div className="pagination-container">
            <li key="prev" className="page-number prev" 
                onClick={() => updateCurrentPage(currentPage-1)}
                disabled={currentPage === 1} >
                    &#60;
                </li>
            {
                getPageNumbers()
            }
            <li  key="next" className="page-number next"
                onClick={() => updateCurrentPage(currentPage+1)}
                disabled={currentPage === Math.ceil(totalCount/PAGINATION_LIMIT)} >
                    &#62;
                </li>
		</div>
	);
}

export default React.memo(Pagination);
