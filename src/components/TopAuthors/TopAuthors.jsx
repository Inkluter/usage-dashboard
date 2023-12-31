import {useCallback, useEffect, useState} from 'react';
import { Author } from './Author';
import { Loader } from '../Loader';
import { ApiUrl } from '../../constants/apiUrl';
import { getMaxCount, getTotalCount } from '../../utils/topAuthors';
import { isProd } from "../../utils/isProd";
import { mockedAuthors } from '../../constants/topAuthors';

export const TopAuthors = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [topAuthors, setTopAuthors] = useState(null);
    const totalCount = getTotalCount(topAuthors);
    const maxValue = getMaxCount(topAuthors);

    const fetchTopAuthors = useCallback(async () => {
        const response = await fetch(`${ApiUrl.BASE_URL}${ApiUrl.TOP_AUTHORS}`);

        const data = await response.json();
        return data;
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchTopAuthors();

            setTopAuthors(data);
            setIsLoaded(true)
        }

        if (isProd()) {
            setTimeout(() => {
                setTopAuthors(mockedAuthors);
                setIsLoaded(true)
            }, 1000);
        } else {
            fetchData().catch((e) => { console.warn(e)} );
        }
    }, [fetchTopAuthors]);

    return (
        <div className="top-authors dashboard-item">
            { !isLoaded ? (
                <Loader />
            ): (
                <>
                    <h2 className="subheader">Top Authors</h2>
                    <div className="authors_container">
                        <div className="authors_total">
                            <div className="authors_total-count">{totalCount}</div>
                            <div className="authors_total-label">Authors</div>
                        </div>
                        <div className="authors_circles">
                            {topAuthors.map((author) => (
                                <Author key={author.id} author={author} maxValue={maxValue} />
                            ))}
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}