const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shufflearray should return the same length as input', () => {
        expect(shuffleArray([1,2,3,4,5]).length).toBe(5)
    })

    test('shufflearray should return an array with all the same numbers', () => {
        expect(shuffleArray([1,2,3,4,5])).toEqual(expect.arrayContaining([1,2,3,4,5]))
    })
})


