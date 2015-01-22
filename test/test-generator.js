var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var mda = require('../MultiDimensionalArray.js');

describe("Call MultiDimensionalArray.generate_1d method with ⇒", function() {
  it("⇒ no arguments. It should return an array with (3) random boolean values.", function() {
    expect(mda.generate_1d()).to.have.length(3);
    // console.log('generated array:', mda.generate_1d());
  });

  it("⇒ 1 numeric (n) argument. It should return an array with (n) random boolean values.", function() {
    expect(mda.generate_1d(5)).to.have.length(5);
    // console.log('generated array:', mda.generate_1d(5));
  });

  it("⇒ argument 0. It should return an empty array.", function() {
    expect(mda.generate_1d(0)).to.have.length(0);
    // console.log('generated array:', mda.generate_1d(0));
  });

  it("⇒ a non-numeric argument passed. It should return an empty array.", function() {
    expect(mda.generate_1d('potato')).to.deep.equal([]);
    // console.log('result', mda.generate_1d('potato'));
    
  });

  it("⇒ one numeric argument mutiple time. It should generate arrays that are not equal (i.e. random).", function() {
    var baseArray = mda.generate_1d(30);
    var compareArrays = [];
    
    while (compareArrays.length < 5) {
      compareArrays.push(mda.generate_1d(30));
    }

    for (var i = 0; i < compareArrays.length; i++) {
      expect(baseArray).to.not.deep.equal(compareArrays[i]);
    }
    // console.log('compareArrays', compareArrays);
  });

});

describe("Call MultiDimensionalArray.generate_2d method with ⇒", function() {
  it("⇒ no arguments. It should return an array (length 3) each containing arrays (length 3) with random boolean values.", function() {
    var baseArray = [];
    while (baseArray.length < 3) {
      baseArray.push(mda.generate_1d());
    }
    // console.log(baseArray);
    expect(mda.generate_2d()).to.have.length(3);

    for (var i = 0; i < baseArray.length; i++) {
      expect(baseArray[i]).to.have.length(3);
    }

  });

  it("⇒ one numeric argument (n). It should return an array length (n), containing arrays that are length (n) containing random boolean values.", function() {
    var baseArray = [];
    var singleNumArg = 5;
    var innerArrayLen = 3;

    while (baseArray.length < singleNumArg) {
      baseArray.push(mda.generate_1d(innerArrayLen));
    }

    expect(mda.generate_2d(singleNumArg)).to.have.length(singleNumArg);

    for (var i = 0; i < baseArray.length; i++) {
      expect(baseArray[i]).to.have.length(innerArrayLen);
    }

  });

  it("⇒ two numeric arguments (n, m). It should return an array length (n), containing arrays that are length (m)", function() {
    var baseArray = [];
    var firstNumArg = 5;
    var secondNumArg = 4;

    while (baseArray.length < firstNumArg) {
      baseArray.push(mda.generate_1d(secondNumArg));
    }
    // console.log(mda.generate_2d(firstNumArg,secondNumArg));
    expect(mda.generate_2d(firstNumArg, secondNumArg)).to.have.length(firstNumArg);

    for (var i = 0; i < baseArray.length; i++) {
      expect(baseArray[i]).to.have.length(secondNumArg);
    }

  });
  
});
