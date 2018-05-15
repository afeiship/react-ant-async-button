var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-content-type');

describe('next/contentType', function () {

  it('nx.contentType', function () {
    var rs1 = nx.contentType('urlencoded');
    var rs2 = nx.contentType('multipart');
    var rs3 = nx.contentType('json');

    assert.equal(rs1, 'application/x-www-form-urlencoded');
    assert.equal(rs2, 'multipart/form-data');
    assert.equal(rs3, 'application/json;charset=utf-8');
  });

});
