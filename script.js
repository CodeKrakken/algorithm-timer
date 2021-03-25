let array = []
let sampleSize = 10

for(let h = 0; sampleSize < 1500000; h++) {

  for(let i = 0; i < sampleSize; i++) {
    array.push(i)
  }

  for(let j = 0; j < 10; j++) {
    console.log(array.length)
    console.time();
    array.reverse()
    console.timeEnd()
  }
  array = []
  sampleSize = sampleSize * 2
}