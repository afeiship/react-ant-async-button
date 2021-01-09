/*!
 * name: @jswork/next-content-type
 * description: Get correct content type for next.
 * homepage: https://github.com/afeiship/next-content-type
 * version: 1.0.1
 * date: 2021-01-06 21:43:25
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var TYPES = {
    urlencoded: 'application/x-www-form-urlencoded',
    multipart: 'multipart/form-data',
    json: 'application/json;charset=utf-8',
    raw: 'text/plain'
  };

  nx.contentType = function (inKey) {
    return TYPES[inKey] || TYPES.urlencoded;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.contentType;
  }
})();
