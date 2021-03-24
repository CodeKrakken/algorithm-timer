let array = []
let sampleSize = 10
for(let i = 0; i < sampleSize; i++) {
  array.push(i)
}

for(let i = 0; i < 10; i++) {
  console.time();
  console.log(array[array.length-1])
  console.timeEnd()
  console.log(array.length)
}