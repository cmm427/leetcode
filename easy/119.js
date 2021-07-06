var getRow = function(rowIndex) {
    if (rowIndex < 0 || rowIndex >= 34) {
        return []
    }
    var result = []
    result[0] = [1]
    result[1] = [1,1]
    for (var i = 2; i < 34; i++) {
        result[i] = []
        result[i][0] = 1
        for (var j = 1; j < i; j++) {
            result[i][j] = result[i-1][j-1] + result[i-1][j]
        }
        result[i][i] = 1
    }
    return result[rowIndex]
};