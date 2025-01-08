// Coding Challenge #1
var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var markBMI = massMark/(heightMark**2);
var johnBMI = massJohn/(heightJohn**2);

var markHigherBMI = markBMI > johnBMI;

console.log(`markBMI=${markBMI.toFixed(2)}`);
console.log(`johnBMI=${johnBMI.toFixed(2)}`);
console.log(`markHigherBMI=${markHigherBMI}`);
