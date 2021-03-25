let array = []
let sampleSize = 10
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

for(let h = 0; sampleSize < 1500000; h++) {

  for(let i = 0; i < sampleSize; i++) {
    array.push(i)
  }

  for(let j = 0; j < 10; j++) {
    console.log(array.length)
    
    array = shuffle(array)
    console.time();
    array.sort()
    console.timeEnd()
    console.log(array)
  }
  array = []
  sampleSize = sampleSize * 2
}
