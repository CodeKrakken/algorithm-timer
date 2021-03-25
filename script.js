let array = []
let sampleSize = 10

for(let h = 0; sampleSize < 1500000; h++) {

  for(let i = 0; i < sampleSize; i++) {
    array.push(Math.floor(Math.random() * sampleSize))
  }

  for(let j = 0; j < 10; j++) {
    console.log(array.length)
    
    console.time();
    const duplicates = findDuplicates(array)
    console.timeEnd()
    console.log(duplicates)
  }
  array = []
  sampleSize = sampleSize * 2
}
