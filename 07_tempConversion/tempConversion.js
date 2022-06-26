const ftoc = function(degree) {
  const result = (degree-32) * 5/9 
  return Number.isInteger(result) ? result  :  Number((result).toFixed(1))
   
  
};

const ctof = function(degree) {
  const result = (degree * 9/5) + 32
  return Number.isInteger(result)? result :  Number((result).toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
