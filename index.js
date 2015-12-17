var path = require('path');
var fs = require('fs');
var _ = require('lodash');
var stat = fs.statSync;

module.exports = function loader(dir) {
  return _.flatten(fs.readdirSync(dir).map(function(file) {
    var filepath = path.join(`${dir}/${file}`);

    if (isDirectory(filepath)) {
      return loader(filepath);
    } else {
      return require(filepath);
    }
  }));
};

function isDirectory(filepath) {
  try { return stat(filepath).isDirectory(); }
  catch (e) { return false; }
}
