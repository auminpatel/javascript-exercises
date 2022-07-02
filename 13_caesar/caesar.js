function mod(n, m) {
  return ((n % m) + m) % m;
}

const caesar = function(string , k) {
  let str  = [...string]
  for(i=0;i<str.length;i++) {
    const charCode = string.charCodeAt(i)
    if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122 )) {
    var shift = charCode >= 65 && charCode <= 90 ? 65 : charCode >= 97 && charCode <= 122 ? 97 : 0;
   
    str[i] = String.fromCharCode((mod((charCode - shift + k), 26)) + shift);
    }
    else {
    str[i] = String.fromCharCode(charCode);
    }
    }
  return str.join('')
};

// Do not edit below this line
module.exports = caesar;
