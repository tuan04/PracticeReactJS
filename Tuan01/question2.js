//Coding Challenge #2
var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var markBMI = massMark/(heightMark**2);
var johnBMI = massJohn/(heightJohn**2);

var markHigherBMI = markBMI > johnBMI;

if(markHigherBMI){
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`)
} else{
    console.log(`John's BMI ${johnBMI.toFixed(1)} is higher than Mark's ${markBMI.toFixed(1)}!`)
}