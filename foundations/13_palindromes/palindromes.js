const palindromes = function (str) {
  let strArray = str.toLowerCase().replace(/[^\w]/g, "").split("");
  const length = strArray.length;
  const middle = Math.floor(length / 2);

  for (let i = 0; i < middle; i++) {
    if (strArray[i] != strArray[length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
