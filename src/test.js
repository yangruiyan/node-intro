var findArea = function(x,y) {
    var total = x+y
    return total
}

var testBoolean = false
var testArray = [123,234]
var testString = 'string'
var testNumber = 123

var toExport = {
    testFunction: findArea,
    testBoolean: testBoolean,
    testArray: testArray,
    testString: testString,
    testNumber: testNumber
}

module.exports = testNumber