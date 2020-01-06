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
