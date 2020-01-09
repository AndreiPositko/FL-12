
function addOne(x) {
    return x + 1;
  }

  function pipe(x, ...func) {       
    for (let i = 0; i < func.length; i++){
      x = addOne(x);
    }
    return x;
  }
  pipe(1,addOne);
  pipe(1,addOne, addOne);


  
