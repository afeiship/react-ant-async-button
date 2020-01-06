/*!
 * name: @feizheng/next-content-type
 * url: https://github.com/afeiship/next-content-type
 * version: 1.1.0
 * date: 2020-01-06T01:58:20.170Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var TYPES = {
    raw: 'application/x-www-form-urlencoded',
    urlencoded: 'application/x-www-form-urlencoded',
    multipart: 'multipart/form-data',
    json: 'application/json;charset=utf-8'
  };

  nx.contentType = function(inKey) {
    return TYPES[inKey] || TYPES.raw;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.contentType;
  }
})();

//# sourceMappingURL=next-content-type.js.map
