
function abs(x){
if(x>=0){
  return x;
  } else {
  return -x;
  }
}

console.log(abs(-10)==abs(10));
function sum(array){
  let result =0;
  for(let element of array){
    result+=element;
  }
  return result;
}

console.log(sum([2,3,5,7,11]));

function factorial(n){
  if( n<1){
    return 1;
  }else{
    return n* factorial(n-1);
  }
}

console.log(factorial(4));
