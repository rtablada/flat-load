var assert = require('assert');
var loader = require('../index.js');
var expect = require('chai').expect;

describe('Flat Loader', function() {
  it('can load a flat folder structure', function() {
    var results = loader(__dirname + '/mocks/flat');

    expect(results).to.deep.equal(['bar', 'foo']);
  });

  it('can load a nested folder structure', function() {
    var results = loader(__dirname + '/mocks/nested');

    expect(results).to.deep.equal(['i', 'am', 'nested', 'too']);
  });

  it('should not load non-js files', function() {
    var results = loader(__dirname + '/mocks/no-js');

    expect(results).to.deep.equal([]);
  });
});
