import { getRandomIntFromInterval } from '../utils/getRandomFromInterval';

describe('getRandomIntFromInterval', () => {
    it('should return a random number between 0 and 300', () => {
        const min = 0;
        const max = 300;
        const randomInt = getRandomIntFromInterval(min, max);
        expect(randomInt).toBeGreaterThanOrEqual(min);
        expect(randomInt).toBeLessThanOrEqual(max);
    });
});