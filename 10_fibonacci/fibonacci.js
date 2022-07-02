const fibonacci = function(num) {

  const number = Number(num) ;

  if(number<0) {
    return "OOPS"
  }

  let prev = 0, next =1;

  let result = 0;

  if(number === 1 || number === 2) {
    return 1
  }

  for(let i = 1; i<number;i++) {
    result = prev + next;

    prev = next;
    next = result
  }

  return result
};

// Do not edit below this line
module.exports = fibonacci;
