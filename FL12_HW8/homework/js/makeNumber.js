
function makeNumbers (str) {
    let newStr = '';
    for (let i=0; i < str.length; i++) {
      if (parseInt(str[i]) || parseInt(str[i]) === 0) {
        newStr += str[i];
      } 
    }
    return newStr;
  }
  console.log(makeNumbers('erer384jjjfd123'));
  console.log(makeNumbers('123098h76gfdd'));
  console.log(makeNumbers('ijifjgdj'));