module.exports = function check(str, bracketsConfig) {
  // your solution
  let brStrArr = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    brStrArr.push(bracketsConfig[i].join(''));
  }
  let k = Math.floor(str.length / 2);
  while (k) {
    for (let j = 0; j < brStrArr.length; j++) {
      if (str.indexOf(brStrArr[j]) !== -1) {
        str = str.replace(brStrArr[j], "");
      }
    }
    k--;
  }
  if (str === "") {
    return true;
  } else {
    return false;
  }
}