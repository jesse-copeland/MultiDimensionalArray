module.exports = {
  generate_1d: function (arrLenArg) {
    var result = [];
    var arrLength = 3;

    if (arrLenArg === undefined) {
      // Do nothing when undefined.
    } else if (typeof arrLenArg === 'number') {
      arrLength = arrLenArg;
    } else {
      return [];
    }
    
    while (result.length < arrLength) {
      result.push(random01());
    }
  
    return result;
  },
  generate_2d: function (outLenArg, inLenArg) {
    var result = [];
    var outerArrLength = 3;
    var innerArrLength = 3;

    if (outLenArg === undefined) {
      // Do nothing when undefined.
    } else if (typeof outLenArg === 'number') {
      outerArrLength = outLenArg;
    }

    if (inLenArg === undefined) {
      // Do nothing when undefined.
    } else if (typeof inLenArg === 'number') {
      innerArrLength = inLenArg;
    }

    while (result.length < outerArrLength) {
      result.push(this.generate_1d(innerArrLength));
    }

    return result;
  }
};

function random01 () {
  return Math.round(Math.random());
}