
const fatDate = require('../src');
const {expect} = require('./_assets');

describe('Complete behaviour', () => {

    it('works with example date #1', () => {
        let input = new Date('1997-07-16T19:20:14.000Z');
        let output = fatDate.fromFat(fatDate.fromDate(input));
        expect(output).to.equalTime(input);
    });

    it('works with example date #2', () => {
        let input = new Date('1982-01-01T19:20:14.000Z');
        let output = fatDate.fromFat(fatDate.fromDate(input));
        expect(output).to.equalTime(input);
    });

    it('works with example date #3', () => {
        let input = new Date('2007-12-31T00:00:00.000Z');
        let output = fatDate.fromFat(fatDate.fromDate(input));
        expect(output).to.equalTime(input);
    });

    it('works with example date #4 (even seconds)', () => {
        let input = new Date('1982-01-01T19:20:15.000Z');
        let expected = new Date('1982-01-01T19:20:16.000Z');
        let output = fatDate.fromFat(fatDate.fromDate(input));
        expect(output).to.equalTime(expected);
    });

    it('works with example date #5 (with milliseconds)', () => {
        let input = new Date('2017-06-25T16:27:18.800Z');
        let expected = new Date('2017-06-25T16:27:18.000Z');
        let output = fatDate.fromFat(fatDate.fromDate(input));
        expect(output).to.equalTime(expected);
    });

    it('works with example date #6 (with milliseconds)', () => {
        let input = new Date('2017-06-25T16:27:19.100Z');
        let expected = new Date('2017-06-25T16:27:20.000Z');
        let output = fatDate.fromFat(fatDate.fromDate(input));
        expect(output).to.equalTime(expected);
    });
    
});