import bubbleSort from "./bubbleSort";

describe('testing bubble sort', () => {
    test('empty array', () => {
        expect(bubbleSort([])).toEqual([])
    })
    test('one number', () => {
        expect(bubbleSort([1])).toEqual([1])
    })
    test('multiple positive numbers', () => {
        expect(bubbleSort([5, 2, 1, 4, 10 ])).toEqual([1, 2, 4, 5, 10])
    })
    test('multiple negative numbers', () => {
        expect(bubbleSort([-1, -23, -232, -29, -3])).toEqual([-232, -29, -23, -3, -1])
    })
    test('multiple numbers', () => {
        expect(bubbleSort([-1, -23, -232, 5, 2, 1, 4, 10, -29, -3, 0])).toEqual([-232, -29, -23, -3, -1, 0, 1, 2, 4, 5, 10])
    })
})