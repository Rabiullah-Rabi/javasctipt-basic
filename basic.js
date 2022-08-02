//Problem 1
var totalMoney  = 1000;
var orangeCost  = 350;
var appleCost   = 350;
var totalCost   = orangeCost + appleCost;
var returnMoney = totalMoney - totalCost;

console.log('Orange cost : '+  orangeCost + 'Taka');
console.log('Apple cost : '+ appleCost + 'Taka');
console.log('Total cost : '+ totalCost + 'Taka');
console.log('Mother gave Herry  : '+ totalMoney + 'Taka');
console.log('Harry will return : '+ returnMoney + 'Taka');

// Problem 2

var mathMarks      = 75.25;
var BiologyMarks   = 65;
var chemistryMarks = 80;
var physicsMarks   = 35.45;
var bangleMarks    = 99.50;

var totalMarks     = mathMarks + BiologyMarks + chemistryMarks + physicsMarks + bangleMarks;

var averageMarks = totalMarks / 5;

console.log('Average marks is : '+ averageMarks.toFixed(2));

//Problem 3
var firstLine = 'I am going to be';
var secondLine = 'an awesome web developer';
var oneLine = firstLine+ ' ' + secondLine;
console.log(oneLine);

//problem 4
var number = 119;
var reminder = number % 5;
console.log(reminder);
console.log(6 != 6);

var i= 0;
for(i=0; i<5 ; i++){};
console.log(i);