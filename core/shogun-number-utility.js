export class ShogunNumberUtility {
    getRandomIntegerNumber (fromInclusive, toExlusive) {
        if (typeof fromInclusive !== 'number' || typeof toExclusive !== 'number') {
            throw new TypeError('Both arguments must be numbers.');
        }
        if (fromInclusive >= toExclusive) {
            throw new RangeError('fromInclusive must be less than toExclusive.');
        }

        return Math.floor(Math.random() * (toExclusive - fromInclusive)) + fromInclusive;
    }
    }
}