//= require remove_space

describe('removeSpace', function () {
  it('removes spaces from a string', function () {
    // assertion goes here.
    var str = 'I have spaces';
    var result = 'Ihavespaces';
    assert.equal(removeSpace(str), result);
  });
});
