/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0, i = 0;
  while (i < preferences.length) {
    if ((preferences[i] != i + 1) && (preferences[i + 1] != i + 2) && (preferences[i + 2] != i + 3) && (preferences[i] + preferences[i + 1] + preferences[i + 2] == 3 * i + 6)) {
    count += 1;
    i += 3;
    }
    else i++;
  }
  return count;
};
