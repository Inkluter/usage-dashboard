import { makePostsBySchoolData } from '../utils/makePostsBySchoolData';
import { postsBySchoolMocked } from '../constants/postsBySchool';

describe('makePostsBySchoolData', () => {
    it('should return an object with labels and datasets properties', () => {
        const result = makePostsBySchoolData(postsBySchoolMocked);
        expect(result).toHaveProperty('labels');
        expect(result).toHaveProperty('datasets');
    });
    it('should return an object with labels property as an array of strings', () => {
        const result = makePostsBySchoolData(postsBySchoolMocked);
        expect(result.labels).toEqual(
            expect.arrayContaining([
                expect.any(String),
            ])
        );
    });
    it('should return an object with datasets property as an array of objects', () => {
        const result = makePostsBySchoolData(postsBySchoolMocked);
        expect(result.datasets).toEqual(
            expect.arrayContaining([
                expect.any(Object),
            ])
        );
    });
    it('should return an object with datasets property as an array of objects with data property', () => {
        const result = makePostsBySchoolData(postsBySchoolMocked);
        expect(result.datasets).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    data: expect.any(Array),
                }),
            ])
        );
    });
});