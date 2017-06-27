
const fatDate = require('../src');
const {expect} = require('./_assets');

describe('FromDate', () => {

    it('example #1', () => {
        let input = new Date('2017-06-26T14:47:58.000Z');
        let fat = fatDate.fromDate(input);
        expect(fat).to.equal(1255831037);
    });

    it('example #2', () => {
        let input = new Date('2013-07-13T06:13:50.000Z');
        let fat = fatDate.fromDate(input);
        expect(fat).to.equal(1122841017);
    });
    
});