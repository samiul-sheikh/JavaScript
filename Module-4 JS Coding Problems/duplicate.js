var id = [4, 6, 8, 2, 3, 6, 2, 14, 16, 14, 8];
var uniqueId = [];
for (var i = 0; i < id.length; i++) {
    var element = id[i];
    var index = uniqueId.indexOf(element);
    if (index == -1) {
        uniqueId.push(element);
    }
}
console.log(uniqueId);


// iq test
function add(a, b) {
    return a + b;
}
console.log(add("adam" + "eve"))