const formatFullname = require('./../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {
    it('should return an error if "fullname" is not string', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(12)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error')
    });

    it('should return an error if "fullname" is empty', () => {
        expect(formatFullname('')).to.equal('Error');
    });

    it('should return an error if "fullname" has different than 2 args', () => {
        expect(formatFullname('Amanda Doe Test')).to.equal('Error');
        expect(formatFullname('Amanda')).to.equal('Error');
        expect(formatFullname('Doe')).to.equal('Error');
        expect(formatFullname('Amanda Emilly Doe Test')).to.equal('Error');
    });

    it('should return correct name', () => {
        expect(formatFullname('amAndA dOe')).to.equal('Amanda Doe');
        expect(formatFullname('JOHN DOE')).to.equal('John Doe');
        expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
    })
})