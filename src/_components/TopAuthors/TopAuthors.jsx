import {useEffect, useState} from 'react';
import { Author } from './Author';
import { Loader } from '../Loader';
import { mockedAuthors } from '../../_constants/topAuthors';

export const TopAuthors = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const totalCount = mockedAuthors.reduce((acc, curr) => acc + curr.posts, 0);
    const maxValue = Math.max(...mockedAuthors.map(author => author.posts));

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 1000)
    }, []);

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
                            {mockedAuthors.map((author) => (
                                <Author key={author.id} author={author} maxValue={maxValue} />
                            ))}
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}