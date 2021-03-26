const DuplicateFinder = require('../src/DuplicateFinder')

describe('duplicate finder', function() {
  beforeEach(function() {
    duplicateFinder = new DuplicateFinder
  })

  it('returns an empty array when there are no duplicates', function() {
    expect(duplicateFinder.findDuplicates(['Anna'])).toEqual([])
    expect(duplicateFinder.findDuplicates(['Reg'])).toEqual([])
    expect(duplicateFinder.findDuplicates(['Anna', 'Reg'])).toEqual([])
  })

  it('returns an array of a single name if given an array of two matching names', function() {
    expect(duplicateFinder.findDuplicates(['Reg', 'Reg'])).toEqual(['Reg'])
  })

  it('returns an array of a single name from an array of three where two match', function() {
    expect(duplicateFinder.findDuplicates(['Reg', 'Anna', 'Anna'])).toEqual(['Anna'])
    expect(duplicateFinder.findDuplicates(['Anna', 'Reg', 'Anna'])).toEqual(['Anna'])
    expect(duplicateFinder.findDuplicates(['Anna', 'Anna', 'Reg'])).toEqual(['Anna'])
  })

  it('picks through complex array to find duplicates', function() {
    expect(duplicateFinder.findDuplicates(['Reg', 'Bob', 'Anna', 'Anna', 'Anna', 'Bob', 'Clive', 'Denzil', 'Denzil'])).toEqual(['Anna', 'Anna', 'Bob', 'Denzil'])

  })
})