(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var KEY_MAP = {
    'urlencoded':'application/x-www-form-urlencoded',
    'multipart':'multipart/form-data',
    'json':'application/json;charset=utf-8'
  };

  nx.contentType = function (inKey) {
    return KEY_MAP[inKey];
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.contentType;
  }

}());
