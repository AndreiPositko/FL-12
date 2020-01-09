function getMin() {
    let minNum = 0;
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] < minNum) {
        minNum = arguments[i];
      }       
    }
    return minNum;
  }
  console.log(getMin(3, 0, -3));