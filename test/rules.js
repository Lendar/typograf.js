var should = require('should');
var rules = require('../lib/rules');

describe('rules', function(){
  it('should fix dash', function(){
    rules.mdash('a - b').should.equal('a — b');
  });
});
