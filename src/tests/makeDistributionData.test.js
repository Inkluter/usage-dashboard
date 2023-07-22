import { makeDistributionData } from '../utils/makeDistributionData';
import { postDistributionMocked } from '../constants/postDistribution';

describe('makeDistributionData', () => {
    it('should return an object with labels and datasets properties', () => {
        const result = makeDistributionData(postDistributionMocked);
        expect(result).toHaveProperty('labels');
        expect(result).toHaveProperty('datasets');
    });
    it('should return an object with labels property as an array of strings', () => {
        const result = makeDistributionData(postDistributionMocked);
        expect(result.labels).toEqual(
            expect.arrayContaining([
                expect.any(String),
            ])
        );
    });
    it('should return an object with datasets property as an array of objects', () => {
        const result = makeDistributionData(postDistributionMocked);
        expect(result.datasets).toEqual(
            expect.arrayContaining([
                expect.any(Object),
            ])
        );
    });
    it('should return an object with datasets property as an array of objects with backgroundColor property', () => {
        const result = makeDistributionData(postDistributionMocked);
        expect(result.datasets).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    backgroundColor: expect.any(Array),
                }),
            ])
        );
    });
    it('should return an object with datasets property as an array of objects with data property', () => {
        const result = makeDistributionData(postDistributionMocked);
        expect(result.datasets).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    data: expect.any(Array),
                }),
            ])
        );
    });
    it('should return an object with datasets property as an array of objects with hoverOffset property', () => {
        const result = makeDistributionData(postDistributionMocked);
        expect(result.datasets).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    hoverOffset: expect.any(Number),
                }),
            ])
        );
    });
});