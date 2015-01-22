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

  it("⇒ a numeric argument passed. The values contained in the array should be either 0 or 1", function() {
    var testResult = mda.generate_1d(6);

    for (var i = 0; i < testResult.length; i++) {
      expect(testResult[i]).to.satisfy(function (val) {
        return val === 0 || val === 1;
      });
    }
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

  it("⇒ one numeric argument (n). It should return an array length (n), containing arrays that are length (3) containing random boolean values.", function() {
    var tier1Arg = 5;
    var tier2Arg = 3;
    var testResult = mda.generate_2d(tier1Arg);

    expect(testResult).to.have.length(tier1Arg);

    for (var i = 0; i < testResult.length; i++) {
      expect(testResult[i]).to.have.length(tier2Arg);
    }

  });

  it("⇒ two numeric arguments (n, m). It should return an array length (n), containing arrays that are length (m)", function() {
    var tier1Arg = 5;
    var tier2Arg = 4;
    var testResult = mda.generate_2d(tier1Arg, tier2Arg);

    expect(testResult).to.have.length(tier1Arg);

    for (var i = 0; i < testResult.length; i++) {
      expect(testResult[i]).to.have.length(tier2Arg);
    }
  });

  it("⇒ an argument containing a string. It should return an empty array.", function() {
    var tier1String = 'potato';
    var testResult = mda.generate_2d(tier1String);

    expect(testResult).to.deep.equal([]);
  });

  it("⇒ two arguments with the second containing a string. It should return an empty array.", function() {
    var tier1Arg = '5';
    var tier2String = 'potato';
    var testResult = mda.generate_2d(tier1Arg, tier2String);

    expect(testResult).to.deep.equal([]);
  });

  
});

describe("Call MultiDimensionalArray.generate_3d method with ⇒", function() {
  it("⇒ no arguments. It should return an array (length 3), containing 3 arrays, each containing arrays (length 3) with random boolean values.", function() {
    var defaultLength = 3;
    var testResult = mda.generate_3d();
    
    expect(testResult).to.have.length(defaultLength);

    for (var i = 0; i < testResult.length; i++) {
      expect(testResult[i]).to.have.length(defaultLength);
      for (var j = 0; j < testResult[i].length; j++) {
        expect(testResult[i][j]).to.have.length(defaultLength);
      }
    }
  });

  it("⇒ one numeric argument (n). It should return an array length (n), containing arrays that are length (3) containing arrays that are length (3) that contain random boolean values.", function() {
    var tier1Arg = 5;
    var defaultLength = 3;
    var testResult = mda.generate_3d(tier1Arg);
    expect(testResult).to.have.length(tier1Arg);

    for (var i = 0; i < testResult.length; i++) {
      expect(testResult[i]).to.have.length(defaultLength);
      for (var j = 0; j < testResult[i].length; j++) {
        expect(testResult[i][j]).to.have.length(defaultLength);
      }
    }
  });

  it("⇒ two numeric arguments (n, m). It should return an array length (n), containing arrays that are length (m) containing arrays that are length (3) that contain random boolean values.", function() {
    var tier1Arg = 5;
    var tier2Arg = 4;
    var defaultLength = 3;
    var testResult = mda.generate_3d(tier1Arg, tier2Arg);

    expect(testResult).to.have.length(tier1Arg);

    for (var i = 0; i < testResult.length; i++) {
      expect(testResult[i]).to.have.length(tier2Arg);
      for (var j = 0; j < testResult[i].length; j++) {
        expect(testResult[i][j]).to.have.length(defaultLength);
      }
    }
  });

  it("⇒ three numeric arguments (n, m, o). It should return an array length (n), containing arrays that are length (m) containing arrays that are length (o) that contain random boolean values.", function() {
    var tier1Arg = 5;
    var tier2Arg = 4;
    var tier3Arg = 8;
    var testResult = mda.generate_3d(tier1Arg, tier2Arg, tier3Arg);

    expect(testResult).to.have.length(tier1Arg);

    for (var i = 0; i < testResult.length; i++) {
      expect(testResult[i]).to.have.length(tier2Arg);
      for (var j = 0; j < testResult[i].length; j++) {
        expect(testResult[i][j]).to.have.length(tier3Arg);
      }
    }
  });

  it("⇒ an argument containing a string. It should return an empty array.", function() {
    var stringArg = 'potato';
    var testResult = mda.generate_3d(stringArg);

    expect(testResult).to.deep.equal([]);
  });

  it("⇒ two arguments, the first containing a number and the second containing a string. It should return an empty array.", function() {
    var tier1Arg = 5;
    var stringArg = 'potato';
    var testResult = mda.generate_3d(tier1Arg, stringArg);

    expect(testResult).to.deep.equal([]);
  });

  it("⇒ three arguments, the first and second containing numbers and the third containing a string. It should return an empty array.", function() {
    var tier1Arg = 5;
    var tier2Arg = 6;
    var stringArg = 'potato';
    var testResult = mda.generate_3d(tier1Arg, tier2Arg, stringArg);

    expect(testResult).to.deep.equal([]);
  });
  
});
