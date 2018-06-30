(function () {

  var global = global || window || self || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var TYPES = {
    'urlencoded':'application/x-www-form-urlencoded',
    'multipart':'multipart/form-data',
    'json':'application/json;charset=utf-8'
  };

  nx.contentType = function (inKey) {
    return TYPES[inKey];
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.contentType;
  }

}());
