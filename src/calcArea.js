var rect = function(w,l) {
    var area = w*l
    return area
}

var circ = function(r) {
    var area = π*r*r
    return area
}

var tri = function(b,h) {
    var area = rect(w,l) / 2
}

var toExport = {
    rectangle: rect,
    circle: circ,
    triangle:tri
}

module.exports = toExport
