export const getTotalCount = (authors) => {
    if (!authors?.length) {
        return 0;
    }

    return authors.reduce((acc, author) => acc + author.posts, 0);
}

export const getMaxCount = (authors) => {
    if (!authors?.length) {
        return 0;
    }

    return Math.max(...authors.map(author => author.posts));
}