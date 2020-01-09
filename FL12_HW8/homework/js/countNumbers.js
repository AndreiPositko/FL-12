function makeNumbers(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i]) || parseInt(str[i]) === 0) {
      newStr += str[i];
    }
  }
  return newStr;
}

function countNumbers(str) {
  let string = makeNumbers(str);
  let newStrObj = {};
  for (let i = 0; i < string.length; i++) {
    !newStrObj[string[i]] ? (newStrObj[string[i]] = 1) : newStrObj[string[i]]++;
  }
  return newStrObj;
}

console.log(countNumbers('erer384jj4444666888jfd123'));
console.log(countNumbers('jdjjka000466588kkkfs662555'));
console.log(countNumbers(''));
