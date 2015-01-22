var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var mda = require('../MultiDimensionalArray.js');

describe("Call MultiDimensionalArray.count method with ⇒", function() {
  it("⇒ an argument containing an array. It should return a count of the number of truthy elements contained in the array.", function() {
    var testArray = [1,0,0,1,0,0,0,0,1];
    expect(mda.count(testArray)).to.equal(3);
  });  
});