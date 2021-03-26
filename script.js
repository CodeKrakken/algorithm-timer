const DuplicateFinder = require('./src/DuplicateFinder')
const duplicateFinder = new DuplicateFinder

let array = []
let sampleSize = 5

for(let h = 0; sampleSize < 750000; h++) {

  for(let i = 0; i < sampleSize; i++) {
    array.push(i)
    array.push(i)
  }

  for(let j = 0; j < 10; j++) {
    console.log(array.length)
    console.time();
    const duplicates = duplicateFinder.findDuplicates(array)
    console.timeEnd()
  }
  array = []
  sampleSize = sampleSize * 2
}
