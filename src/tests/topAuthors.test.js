import { getMaxCount, getTotalCount } from '../utils/topAuthors';
import { mockedAuthors } from '../constants/topAuthors';

describe('getTotalCount', () => {
    it('should return 0 if no authors are provided', () => {
        const authors = [];
        const totalCount = getTotalCount(authors);
        expect(totalCount).toEqual(0);
    });

    it('should return the sum of all author posts', () => {

        const totalCount = getTotalCount(mockedAuthors);
        expect(totalCount).toEqual(168);
    });
});

describe('getMaxCount', () => {
    it('should return 0 if no authors are provided', () => {
        const authors = [];
        const maxCount = getMaxCount(authors);
        expect(maxCount).toEqual(0);
    });

    it('should return the max number of posts', () => {
        const maxCount = getMaxCount(mockedAuthors);
        expect(maxCount).toEqual(40);
    });
});