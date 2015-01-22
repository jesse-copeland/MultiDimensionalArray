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
      result.push(this.random01());
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
    } else {
      return [];
    }

    if (inLenArg === undefined) {
      // Do nothing when undefined.
    } else if (typeof inLenArg === 'number') {
      innerArrLength = inLenArg;
    } else {
      return [];
    }

    while (result.length < outerArrLength) {
      result.push(this.generate_1d(innerArrLength));
    }

    return result;
  },
  generate_3d: function (outOutLenArg, outInLenArg, inInLenArg) {
    var result = [];
    var outOuterArrLen = 3;
    var outInnerArrLen = 3;
    var inInnerArrLen = 3;

    if (outOutLenArg === undefined) {
      // Do nothing when undefined.
    } else if (typeof outOutLenArg === 'number') {
      outOuterArrLen = outOutLenArg;
    } else {
      return [];
    }

    if (outInLenArg === undefined) {
      // Do nothing when undefined.
    } else if (typeof outInLenArg === 'number') {
      outInnerArrLen = outInLenArg;
    } else {
      return [];
    }

    if (inInLenArg === undefined) {
      // Do nothing when undefined.
    } else if (typeof inInLenArg === 'number') {
      inInnerArrLen = inInLenArg;
    } else {
      return [];
    }

    while (result.length < outOuterArrLen) {
      result.push(this.generate_2d(outInnerArrLen, inInnerArrLen));
    }

    return result;
  },
  random01: function () {
    return Math.round(Math.random());
  },
  count: function (array) {
    return array.reduce(function (prev, curr) {
      return prev + curr;
    },0);
  }

};
