const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M'
}
  
function rot13(encodedStr) {
  const encodedArr = encodedStr.split('');
  let decodedArr = [];
  
  decodedArr = encodedArr.map(letter => {
    if(lookup.hasOwnProperty(letter)) {
      letter = lookup[letter];
    }
    return letter;
  })
  
  console.log(decodedArr.join(''));
  return decodedArr.join('');
}
  
// rot13("SERR PBQR PNZC");
