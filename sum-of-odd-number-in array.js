function findOddSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number % 2 !== 0) {
            sum = sum + number;

        }
    }
    return sum;
}
let numbers = [5, 5, 10, 43, 55, 50, 500, 98];
console.log(findOddSum(numbers));