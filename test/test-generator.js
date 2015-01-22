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
    var testResult = mda.generate_1d(30);
    var compareArrays = [];
    
    while (compareArrays.length < 5) {
      compareArrays.push(mda.generate_1d(30));
    }

    for (var i = 0; i < compareArrays.length; i++) {
      expect(testResult).to.not.deep.equal(compareArrays[i]);
    }
  });

});

describe("Call MultiDimensionalArray.generate_2d method with ⇒", function() {
  it("⇒ no arguments. It should return an array (length 3) each containing arrays (length 3) with random boolean values.", function() {
    var testResult = mda.generate_2d(); //

    expect(testResult).to.have.length(3);

    for (var i = 0; i < testResult.length; i++) {
      expect(testResult[i]).to.have.length(3);
    }

  });

  it("⇒ one numeric argument (n). It should return an array length (n), containing arrays that are length (n) containing random boolean values.", function() {
    var singleNumArg = 5;
    var innerArrayLen = 3;
    var testResult = mda.generate_2d(singleNumArg);

    expect(testResult).to.have.length(singleNumArg);

    for (var i = 0; i < testResult.length; i++) {
      expect(testResult[i]).to.have.length(innerArrayLen);
    }

  });

  it("⇒ two numeric arguments (n, m). It should return an array length (n), containing arrays that are length (m)", function() {
    var firstNumArg = 5;
    var secondNumArg = 4;
    var testResult = mda.generate_2d(firstNumArg, secondNumArg);

    expect(testResult).to.have.length(firstNumArg);

    for (var i = 0; i < testResult.length; i++) {
      expect(testResult[i]).to.have.length(secondNumArg);
    }
  });

  it("⇒ an argument containing a string. It should return an empty array.", function() {
    var stringArg = 'potato';
    var testResult = mda.generate_2d(stringArg);

    expect(testResult).to.deep.equal([]);
  });

  it("⇒ two arguments with the second containing a string. It should return an empty array.", function() {
    var firstNumArg = '5';
    var stringArg = 'potato';
    var testResult = mda.generate_2d(firstNumArg, stringArg);

    expect(testResult).to.deep.equal([]);
  });

  
});

describe("Call MultiDimensionalArray.generate_3d method with ⇒", function() {
  it("⇒ no arguments. It should return an array (length 3), containing 3 arrays, each containing arrays (length 3) with random boolean values.", function() {
    var defaultLength = 3;
    var testResult = mda.generate_3d();
    
    expect(testResult).to.have.length(3);

    for (var i = 0; i < testResult.length; i++) {
      expect(testResult[i]).to.have.length(3);
      for (var j = 0; j < testResult[i].length; j++) {
        expect(testResult[i][j]).to.have.length(3);
      }
    }
  });

  it("⇒ one numeric argument (n). It should return an array length (n), containing arrays that are length (3) containing arrays that are length (3) that contain random boolean values.", function() {
    var singleNumArg = 5;
    var innerArrayLen = 3;
    var testResult = mda.generate_3d(singleNumArg);

    expect(testResult).to.have.length(singleNumArg);

    for (var i = 0; i < testResult.length; i++) {
      expect(testResult[i]).to.have.length(3);
      for (var j = 0; j < testResult[i].length; j++) {
        expect(testResult[i][j]).to.have.length(3);
      }
    }
  });

  it("⇒ two numeric arguments (n, m). It should return an array length (n), containing arrays that are length (m) containing arrays that are length (3) that contain random boolean values.", function() {
    var firstNumArg = 5;
    var secondNumArg = 4;
    var testResult = mda.generate_3d(firstNumArg, secondNumArg);

    expect(testResult).to.have.length(firstNumArg);

    for (var i = 0; i < testResult.length; i++) {
      expect(testResult[i]).to.have.length(secondNumArg);
      for (var j = 0; j < testResult[i].length; j++) {
        expect(testResult[i][j]).to.have.length(3);
      }
    }
  });

  it("⇒ three numeric arguments (n, m, o). It should return an array length (n), containing arrays that are length (m) containing arrays that are length (o) that contain random boolean values.", function() {
    var firstNumArg = 5;
    var secondNumArg = 4;
    var thirdNumArg = 8;
    var testResult = mda.generate_3d(firstNumArg, secondNumArg, thirdNumArg);

    expect(testResult).to.have.length(firstNumArg);

    for (var i = 0; i < testResult.length; i++) {
      expect(testResult[i]).to.have.length(secondNumArg);
      for (var j = 0; j < testResult[i].length; j++) {
        expect(testResult[i][j]).to.have.length(thirdNumArg);
      }
    }
  });

  it("⇒ an argument containing a string. It should return an empty array.", function() {
    var stringArg = 'potato';
    var testResult = mda.generate_3d(stringArg);

    expect(testResult).to.deep.equal([]);
  });

  it("⇒ two arguments, the first containing a number and the second containing a string. It should return an empty array.", function() {
    var firstNumArg = 5;
    var stringArg = 'potato';
    var testResult = mda.generate_3d(firstNumArg, stringArg);

    expect(testResult).to.deep.equal([]);
  });

  it("⇒ three arguments, the first and second containing numbers and the third containing a string. It should return an empty array.", function() {
    var firstNumArg = 5;
    var secondNumArg = 6;
    var stringArg = 'potato';
    var testResult = mda.generate_3d(firstNumArg, secondNumArg, stringArg);

    expect(testResult).to.deep.equal([]);
  });
  
});
