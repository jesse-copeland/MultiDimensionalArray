module.exports = {
  generate_1d: function (count) {
    var result = [];
    var elemCount;

    if (count === undefined) {
      elemCount = 3;
    } else if (typeof count === 'number') {
      elemCount = count;
    } else {
      return [];
    }
    
    while (result.length < elemCount) {
      result.push(random01());
    }
  
    return result;
  },
  generate_2d: function (outLenArg, inLenArg) {
    var result = [];
    var outerArrLength;
    var innerArrLength;

    if (outLenArg === undefined) {
      outerArrLength = 3;
      innerArrLength = 3;
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