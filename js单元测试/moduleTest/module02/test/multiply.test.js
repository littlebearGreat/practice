var multiply = require('../js/multiply.js');
var expect = require('chai').expect;

describe('multiplyTest',function(){
	it('5*6=30',function(){
		expect(multiply(5,6)).to.be.equal(30);
	});
});