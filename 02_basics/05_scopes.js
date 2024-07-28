  let a=100             //global scope
  if (true){
    let a=10            //not accessible outside
    const b=20          //not accessible outsid
    var c=30            //can be accessed, does not support block level scope. this is the problem with var
  }
  console.log(c);       //30 prints


  function addOne(num){
    return num+1
  }
  addOne(5)

  //addTwo(5)
  const addTwo=function(num){
    return num+2
  }
  //hosting: how functions are declared
