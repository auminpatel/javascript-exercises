const add = function(...arr) {
  if(arr.length === 0)
  {return 0;}

	return arr.reduce((result , item )=> result + item , 0)
};

const subtract = function(...arr) {
	if(arr.length === 0)
  {return 0;}


	return arr.reduce((result , item )=> Math.abs(result - item) , 0)
};

const sum = function(arr) {
	if(arr.length === 0)
  {return 0;}

	return arr.reduce((result , item )=> result + item , 0)
};

const multiply = function(arr) {
  if(arr.length === 0)
  {return 0;}

	return arr.reduce((result , item )=> result * item , 1)
};

const power = function(num, power) {
  let result = 1;
  for(let i=1;i<=power;i++) {
    result *= num
  }
  return result
};

const factorial = function(num) {
  let value = 1;
	if(num===0) {
    return value;
  }

  else 
  for(let i=1;i<=num;i++) {
    value *= i;
  }
  return value;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
