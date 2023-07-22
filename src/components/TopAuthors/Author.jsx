export const Author = ({ author, maxValue }) => {
    const percentage = Math.round((author.posts / maxValue) * 100);

    return (
        <div className="author">
            <div className="author_circle-wrapper">
                <div
                    style={{
                        width: `${percentage}px`,
                        height: `${percentage}px`,
                    }}
                    className="author_circle">
                    {author.posts}
                </div>
            </div>
            <div className="author_name">{author.name}</div>
            <div className="author_school">{author.school}</div>
        </div>
    )
}