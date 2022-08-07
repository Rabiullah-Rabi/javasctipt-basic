//By using a temporary variable
let a = 5; b = 9;
//console.log(a, b);
let temp = a;
a = b;
b = temp;
//console.log(a, b);

//by using destructing method
let c = 5; d = 9;
//console.log(d, c);

[c, d] = [d, c];
//console.log(d, c);

//this method is valid only for math operation;
let x = 8; y = 3;
console.log(x, y);
x = x + y;
y = x - y;
x = x - y;
console.log(x, y);