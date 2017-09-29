var assert = require('chai').assert;
var expect = require('chai').expect;


describe('#shuffle()', function() {
  it('elements in the array should not be at the same index once shuffled', function () {
    array = [1,2,3,4,5];
    assert.(array.shuffle())
  });
});
