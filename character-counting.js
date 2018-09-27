function countLetters(stringToBeCounted) {
  var object = {};
  for (var i = 0; i < stringToBeCounted.length; i++) {
    var currentLetter = stringToBeCounted[i];
    if (object[currentLetter]) {
      object[currentLetter] += 1;
    } else {
      object[currentLetter] = 1;
    }
    delete object[' '];
  }
  return object;
}console.log(countLetters('water bottle'));
