const arr = [1, 9, 5, 8, 1, 0, -3, 5, -9, 4, -9];
function positiveNumbers(numbers) {
    const positive = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < 0) {
            break;
        }
        else if (element >= 0) {
            positive.push(element);
        }

    }
    return positive;
}
console.log(positiveNumbers(arr));