module.exports = {
  generate_1d: function (arrLenArg) {
    var result = [];
    var arrLength;

    if (arrLenArg === undefined) {
      arrLength = 3;
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
    var outerArrLength;
    var innerArrLength = 3;

    if (outLenArg === undefined) {
      outerArrLength = 3;
    } else if (typeof outLenArg === 'number') {
      outerArrLength = outLenArg;
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