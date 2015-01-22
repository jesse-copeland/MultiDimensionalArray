module.exports = {
  generate_1d: function (g1dTier1Arg) {
    var result = [];

    if (g1dTier1Arg === undefined) {g1dTier1Arg = 3;}

    if (typeof g1dTier1Arg === 'number') {
      g1dTier1Len = Math.abs(g1dTier1Arg);
    } else {
      return [];
    }
    
    while (result.length < g1dTier1Len) {
      result.push(this.random01());
    }
  
    return result;
  },
  generate_2d: function (g2dTier1Arg, g2dTier2Arg) {
    var result = [];

    if (g2dTier1Arg === undefined) {g2dTier1Arg = 3;}
    if (g2dTier2Arg === undefined) {g2dTier2Arg = 3;}
    
    if (typeof g2dTier1Arg === 'number' && typeof g2dTier2Arg === 'number') {
      g2dTier1Len = Math.abs(g2dTier1Arg);
      g2dTier2Len = Math.abs(g2dTier2Arg);
    } else {
      return [];
    }

    while (result.length < g2dTier1Len) {
      result.push(this.generate_1d(g2dTier2Len));
    }

    return result;
  },
  generate_3d: function (g3dTier1Arg, g3dTier2Arg, g3dTier3Arg) {
    var result = [];

    if (g3dTier1Arg === undefined) {g3dTier1Arg = 3;}
    if (g3dTier2Arg === undefined) {g3dTier2Arg = 3;}
    if (g3dTier3Arg === undefined) {g3dTier3Arg = 3;}
    
    if (typeof g3dTier1Arg === 'number' && typeof g3dTier2Arg === 'number' && typeof g3dTier3Arg === 'number') {
      g3dTier1Len = Math.abs(g3dTier1Arg);
      g3dTier2Len = Math.abs(g3dTier2Arg);
      g3dTier3Len = Math.abs(g3dTier3Arg);
    } else {
      return [];
    }
  
    while (result.length < g3dTier1Len) {
      result.push(this.generate_2d(g3dTier2Len, g3dTier3Len));
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

function genNestArr () {
  // expects positive numeric arguments to be passed
  // each argument sets the number of elements. 
  // arguments[0] > outer arguments[n] > inner
  // genNestArr(3); === [0,1,1]
  // genNestArr(2,3); === [[1,1,0],[0,1,0]]
  // genNestArr(2,3,4); === [[[0,1,0,1],[1,0,1,0],[1,1,1,1]],[[0,0,0,0],[1,0,0,1],[1,0,1,0]]]
}




