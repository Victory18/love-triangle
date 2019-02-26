/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for (var i = 0; i < preferences.length; i++) {
    var a = preferences[i] - 1 && a !== i;
    var b = preferences[a] - 1 && b !== a;
    var c = preferences[b] - 1 && c !== b;
    if (c == i) {
      count++;
    }
  }
  return Math.floor(count / 3);
};

