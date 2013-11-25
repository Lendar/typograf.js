exports.mdash = function (str) {
  return str.replace(/ - /g, ' — ');
};

exports.quotes = function (str) {
  return str
    .replace(/ "/g, ' «')
    .replace(/^"/g, '«')
    .replace(/" /g, '» ');
};

exports.nbsp = function (str) {
  return str
    .replace(/ q /g, '')
    .replace();
};

exports.all = function (str) {
  return exports.mdash(exports.quotes(exports.nbsp(str)));
};
