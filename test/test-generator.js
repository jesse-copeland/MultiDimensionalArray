var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var mda = require('../MultiDimensionalArray.js');

describe("MultiDimensionalArray Tester", function() {
  describe("Generator Function", function() {
    it("should be defined as a Function", function() {
      expect(mda.generate).to.be.a('function');
      expect(mda.generate).to.be.instanceof(Function);
    });
    it("should return an array containing three arrays if no arguments are passed", function() {
      var testArray = [[0,1,0],[1,1,0],[0,1,1]];

      expect(mda.generate()).to.deep.equal(testArray);
      
    });
  });
});