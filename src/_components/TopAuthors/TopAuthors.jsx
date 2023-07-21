import { mockedAuthors } from '../../_constants/topAuthors';
import { Author } from './Author';

export const TopAuthors = () => {
    const totalCount = mockedAuthors.reduce((acc, curr) => acc + curr.posts, 0);
    const maxValue = Math.max(...mockedAuthors.map(author => author.posts));

    return (
        <div className="top-authors dashboard-item">
            <h2 className="subheader">Top Authors</h2>
            <div className="authors_container">
                <div className="authors_total">
                    <div className="authors_total-count">{totalCount}</div>
                    <div className="authors_total-label">Authors</div>
                </div>
                <div className="authors_circles">
                    {mockedAuthors.map((author, index) => (
                        <Author key={author.id} author={author} maxValue={maxValue} />
                    ))}
                </div>
            </div>
        </div>
    )
}