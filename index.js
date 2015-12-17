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
      if (filepath.indexOf('.js') === filepath.length - 3) {
        return require(filepath);
      }
    }
  }).filter(function(result) {
    return result !== undefined;
  }));
};

function isDirectory(filepath) {
  try { return stat(filepath).isDirectory(); }
  catch (e) { return false; }
}
