/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const origionakStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  const reverseStr = origionakStr.split("");
  reverseStr.reverse();
  const finalStr = reverseStr.join("");
  if(origionakStr === finalStr) {
    return true;
  } else {
    return false;
  }

  // const reverseStr = origionakStr.split("")
  // reverseStr.reverse();
  // const finalStr = reverseStr.join("");
  // if (origionakStr === finalStr) {
  //  return true;
  // } else {
  //   return false;
  // }
  
}

module.exports = isPalindrome;
