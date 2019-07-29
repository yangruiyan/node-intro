var rect = function(w,l,h) {
    var volume = w*l*h
    return volume
}
var toExport = {
    rectangle: rect,
}

module.exports = toExport