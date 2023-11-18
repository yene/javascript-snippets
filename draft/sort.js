function listsGetSortCompare(type, direction) {
  var compareFuncs = {
    'NUMERIC': function(a, b) {
        return Number(a) - Number(b); },
    'TEXT': function(a, b) {
        return String(a) > String(b) ? 1 : -1; },
    'IGNORE_CASE': function(a, b) {
        return String(a).toLowerCase() > String(b).toLowerCase() ? 1 : -1; },
  };
  var compare = compareFuncs[type];
  return function(a, b) { return compare(a, b) * direction; };
}
