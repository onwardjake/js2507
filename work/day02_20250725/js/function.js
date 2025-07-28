let sum = function (a, b) {
    return a + b;
}
document.getElementById('content').innerHTML = sum(10, 20);

// (function () { document.getElementById('t1').innerHTML = sum(8,2) }());
(function(a, b){ sum})