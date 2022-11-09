import hammingDistance from "./hammingDistance";

const longString1 = `
However, there are some caveats to using TypeScript with Babel.
Because TypeScript support in Babel is purely transpilation,
Jest will not type-check your tests as they are run.`

const longString2 = `
However, there are same c111ats to using TypeScript with Babel.
Because TypeScript support in Babel is purely transpilation,
Jest will not type-check your tests as they are run.`


describe('testing hamming distance', () => {

})

describe('Hamming Distance similar strings', () => {
    test('empty strings', () => {
        expect(hammingDistance('', '')).toBe(0)
    })
    test('similar strings 1', () => {
        expect(hammingDistance('aaa', 'aaa')).toBe(0)
    })
    test('similar strings 2', () => {
        expect(hammingDistance('//hello world123,,', '//hello world123,,')).toBe(0)
    })
    test('similar strings 3', () => {
        expect(hammingDistance(longString1, longString1)).toBe(0)
    })
})
describe('Hamming Distance different strings', () => {

    test('different strings 1', () => {
        expect(hammingDistance('aaaa', 'aaab')).toBe(1)
    })
    test('deifferent strings 2', () => {
        expect(hammingDistance('//hal1o world123,,', '//hello world123,,')).toBe(2)
    })

    test('karolin & kathrin', () => {
        expect(hammingDistance('karolin', 'kathrin')).toBe(3)
    })
    test('numbers', () => {
        expect(hammingDistance('2173896', '2233796')).toBe(3)
    })

    test('different strings 3', () => {
        console.log('hamming distance of long strings: ', hammingDistance(longString1, longString2))
        expect(hammingDistance(longString1, longString2)).not.toBe(0)
    })
    test('empty string and not empty string', () => {
        expect(() => hammingDistance('', 'hello world')).toThrow()
    })
    test('different length', () => {
        expect(() => hammingDistance('hnle wrld', 'hello world')).toThrow()
    })
})