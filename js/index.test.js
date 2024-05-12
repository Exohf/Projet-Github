import { sum, sub, division, modulo } from './index';

describe('Math Functions', () => {
    describe('sum', () => {
        test('adds 1 + 2 to equal 3', () => {
            expect(sum(1, 2)).toBe(3);
        });

        test('adds -1 + 4 to equal 3', () => {
            expect(sum(-1, 4)).toBe(3);
        });
    });

    describe('sub', () => {
        test('subtracts 3 - 2 to equal 1', () => {
            expect(sub(3, 2)).toBe(1);
        });

        test('subtracts 10 - 5 to equal 5', () => {
            expect(sub(10, 5)).toBe(5);
        });
    });

    describe('division', () => {
        test('divides 10 by 2 to equal 5', () => {
            expect(division(10, 2)).toBe(5);
        });

        test('divides 6 by 3 to equal 2', () => {
            expect(division(6, 3)).toBe(2);
        });
    });

    describe('modulo', () => {
        test('modulus of 10 and 3 to equal 1', () => {
            expect(modulo(10, 3)).toBe(1);
        });

        test('modulus of 8 and 4 to equal 0', () => {
            expect(modulo(8, 4)).toBe(0);
        });
    });
});
