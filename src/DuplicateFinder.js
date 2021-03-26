function DuplicateFinder() {
  
  this.findDuplicates = function(array) {
    let duplicates = []
    array.sort()
    for(let k = 0; k < array.length-1; k++) {
      if(array[k] === array[k+1]) {
        duplicates.push(array[k])
      }
    }
    return duplicates
  }

}

module.exports = DuplicateFinder