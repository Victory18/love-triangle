/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0; var a = 0; var b = 0; var c = 0;
    for (var i = 0; i < preferences.length; i++) {
        (a = preferences[i] - 1) && (a !== i);
        (b = preferences[a] - 1) && (b !== a);
        (c = preferences[c] - 1 && (c !== b);
        if (c == i) {
            count++;
        }

    }

    return count / 3;
}

