function indiceLocator(stringToBeCounted) {
  var object = {};

  for (var i = 0; i < stringToBeCounted.length; i++) {
    var currentLetter = stringToBeCounted[i];

    if (object[currentLetter]) {
      object[currentLetter].push(i);
    } else {
      object[currentLetter] = [i];
    }
    delete object[' '];
  }
  return object;
}
