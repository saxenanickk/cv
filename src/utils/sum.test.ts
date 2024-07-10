// Tests for sum.ts

import { sum } from './sum';
import { expect, test, describe } from '@jest/globals';

describe('sum', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});