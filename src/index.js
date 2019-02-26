/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;
    for (var i = 0; i < preferences.length; i+= 3) {
        if ((preferences[i] !== i + 1) && (preferences[i + 1] !== i + 2) && (preferences[i + 2] !== i + 3) && (preferences[i] + preferences[i + 1] + preferences[i + 2] === 3 * i + 6)) 
        count++;
    }

    return count;
}

