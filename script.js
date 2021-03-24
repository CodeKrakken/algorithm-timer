let array = []
let sampleSize = 10

for(let h = 0; sampleSize < 1500000; h++) {

  for(let i = 0; i < sampleSize; i++) {
    array.push(i)
  }

  for(let j = 0; j < 10; j++) {
    console.time();
    console.log(array[array.length-1])
    console.timeEnd()
  }

  sampleSize = sampleSize * 2
}