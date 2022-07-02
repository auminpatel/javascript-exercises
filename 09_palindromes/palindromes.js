const palindromes = function (string) {

  if(string.length>0)
  {
    const trimmedString = string.replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, '').toLowerCase()
    if([...trimmedString].reverse().join('') === trimmedString) {
      return true
    }
  }
    return false
 
};

// Do not edit below this line
module.exports = palindromes;
