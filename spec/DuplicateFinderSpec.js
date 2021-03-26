const DuplicateFinder = require('../src/DuplicateFinder')

describe('duplicate finder', function() {
  beforeEach(function() {
    duplicateFinder = new DuplicateFinder
  })

  it('returns an empty array when there are no duplicates', function() {
    expect(duplicateFinder.findDuplicates(['Anna'])).toEqual([])
  })
})