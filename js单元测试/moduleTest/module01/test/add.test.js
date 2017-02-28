var add = require('../js/add.js');
var expect = require('chai').expect;

describe('addTest',function(){
	it('2+6=8',function(){
		expect(add(2,6)).to.be.equal(8);
	});
});