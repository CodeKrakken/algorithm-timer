let array = []
let sampleSize = 640

for(let i = 0; i < 10; i++) {
  console.time();
  for(let j = 0; j < sampleSize; j++) {
    array.push(j)
  }
  console.timeEnd()
  console.log(array.length)
  array = []
}