var generate = function(numRows) {
    if (numRows < 1) {
        return []
    }
    var result = []
    result[1] = [1]
    result[2] = [1,1]
    for (var i = 3; i <= 30; i++) {
        result[i] = []
        result[i][0] = 1
        for(var j = 1; j < i - 1; j++) {
            result[i][j] = result[i-1][j-1] + result[i-1][j]
        }
        result[i][i-1] = 1
    }
    return result.slice(1, numRows + 1)
};