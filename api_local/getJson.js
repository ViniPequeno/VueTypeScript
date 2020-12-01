const fun = function getFile(fileName) {
  var fs = require("fs");
  var jsonData = fs.readFileSync(`./api_local/json/${fileName}.json`, "utf8");
  return jsonData;
};

module.exports = fun;
