//array basic operation(find index of a value,replace an element eith index , push an element, pop an element)
// var fruits = ['Apple' , 'Banana' , 'Orange'];
// console.log(fruits.indexOf('Banana'));
// fruits[1]='Mango';
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);
// fruits.push('Watermelon');
// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits);
// console.log(fruits.unshift("Lemon","Pineapple"));
// console.log(fruits);

//Problem 2(grading sysytem)
var result= 50;
if(result < 0){
    console.log('Dhur mia khatay ki akam korso. number to paw nai ulta marks kaitta Negative marking khaiso');
}
else{
    if(result<=39){
        console.log('Tumi fail marso');
    }
    else if(result >= 40 && result < 50){
        console.log("Congratulation , tumi pass to korso kintu D paiaso");
    }
    else if(result >= 50 && result < 60){
        console.log("Congratulation , tumi pass to korso kintu C paiaso");
    }
    else if(result >= 60 && result < 80){
        console.log("Congratulation , tumi  B paiaso");
    }
    else if(result >= 80 && result <= 100){
        console.log("Congratulation , tumi A paiaso");
    }
    else{
        console.log("100 theke beshi number ki pawa jay? ");
    }
}

//practice Problem(find the leargest number from 3)
var num1 = 500 ;
var num2 = 50 ;
var num3 = 00 ;

if((num1 >= num2) && num1 > num3){
    if(num1>num2){
        console.log(num1 + " is grater than " + num2 + ' & '+ num3);
    }
    else if((num1 == num2) && (num1 > num3)){
        console.log(num1 +' & ' + num2 + ' are equal'+' and '+ num1 + " is grater than "+ num3);
    }
    else{
        console.log(num1 +' & ' + num2 + ' are equal')
    }
}
else if((num1 >= num3) && num1 > num2){
    if(num1>num3){
        console.log(num1 + " is grater than " + num2 + ' & '+ num3);
    }
    else if((num1 == num3) && (num1 > num2)){
        console.log(num1 +' & ' + num3 + ' are equal'+' and '+ num1 + " is grater than "+ num2);
    }
    else{
        console.log(num1 +' & ' + num3 + ' are equal')
    }
}
else if((num2 >= num3) && num2 > num1){
    if(num2>num3){
        console.log(num2 + " is grater than " + num1 + ' & '+ num3);
    }
    else if((num2 == num3) && (num2 > num1)){
        console.log(num2 +' & ' + num3 + ' are equal'+' and '+ num2 + " is grater than "+ num1);
    }
    else{
        console.log(num2 +' & ' + num3 + ' are equal')
    }
}
else if((num3 >= num1) && num3 > num2){
    if(num3>num1){
        console.log(num3 + " is grater than " + num1 + ' & '+ num2);
    }
    else if((num3 == num1) && (num3 > num2)){
        console.log(num1 +' & ' + num3 + ' are equal'+' and '+ num1 + " is grater than "+ num2);
    }
    else{
        console.log(num3 +' & ' + num1 + ' are equal')
    }
}
else{
    console.log('All are equal');
}
    

//problem 3 (Check triangle is isosceles or not)
var side1=3;
var side2=2;
var side3=1;

if(side1<=0 || side2<=0 || side3<=0 ){
    console.log('age sothik value dau. 1 ba tar beshi dite hobe.');
}
else{
    if((side1 == side2) || (side1 == side3) || (side2 == side3)){
        console.log('This is Isosceles');
    }
    else{
        console.log("This is not Isosceles");
    }
}

//Trafic light
var signal = "red";
if (signal == 'green'){
    console.log('Go');
}
else if (signal == 'red'){
    console.log('Don`t Go');
}
else if (signal == 'yellow'){
    console.log('Stop ! Don`t Go');
}