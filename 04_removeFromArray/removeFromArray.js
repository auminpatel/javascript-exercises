const removeFromArray = function(inputArray , ...args) {
  for(let i=0;i<args.length;i++) {
    const index = inputArray.indexOf(args[i]);
    if(typeof( inputArray[index]) === typeof( args[i])) {
      inputArray.splice(index,1)
    }
  }
  return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
