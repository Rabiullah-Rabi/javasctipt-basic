function factorial(number) {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}
function factorialRev(number) {
    let fact = 1;
    for (i = number; i > 0; i--) {
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(5));
console.log(factorialRev(5));