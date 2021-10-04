const dateConvert = require('./modules/dateConverter')

describe('converDate', () => {
    it(`input string '6' should return 'true'`, () => {
        const expected = '1-9-1993'
        const actual = dateConvert.dateToString(new Date(1993, 8))

        expect(actual).toBe(expected)
    })

    it(`input string 'text' should return 'false'`, () => {
        const expected = 9
        const actual = 4 + 5

        expect(actual).toBe(expected)
    })
})