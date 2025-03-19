import { ShogunNumberUtility } from './shogun-number-utility.js';

describe('ShogunNumberUtility', () => {
    let util;

    beforeEach(() => {
        util = new ShogunNumberUtility();
    });

    test('must return a number within the range [fromInclusive, toExclusive)', () => {
        const from = 5;
        const to = 10;
        for (let i = 0; i < 100; i++) {
            const result = util.getRandomIntegerNumber(from, to);
            expect(result).toBeGreaterThanOrEqual(from);
            expect(result).toBeLessThan(to);
        }
    });

    test('should throw a TypeError if the arguments are not numbers', () => {
        expect(() => util.getRandomIntegerNumber('a', 10)).toThrow(TypeError);
        expect(() => util.getRandomIntegerNumber(1, 'b')).toThrow(TypeError);
        expect(() => util.getRandomIntegerNumber(null, undefined)).toThrow(TypeError);
    });

    test('should throw a RangeError if fromInclusive >= toExclusive', () => {
        expect(() => util.getRandomIntegerNumber(10, 10)).toThrow(RangeError);
        expect(() => util.getRandomIntegerNumber(15, 5)).toThrow(RangeError);
    });

    test('must return only integers', () => {
        const result = util.getRandomIntegerNumber(0, 100);
        expect(Number.isInteger(result)).toBe(true);
    });
});
