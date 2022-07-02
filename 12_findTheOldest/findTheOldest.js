const findTheOldest = function(arr) {
  let resultAge = 0, indexNumber;

  arr.forEach((element , index)=> {
    let age;
    if(element.yearOfDeath) {
      age =element.yearOfDeath - element.yearOfBirth
    }
    
    else {
      age = new Date().getFullYear() - element.yearOfBirth
    }


    if(resultAge < age ) {
    resultAge = age
    indexNumber = index
  }

 
  });

return arr[indexNumber]

};

// Do not edit below this line
module.exports = findTheOldest;
