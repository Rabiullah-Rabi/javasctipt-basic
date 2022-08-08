const numbers = [50, 60, 4, 5, 96, -98];
//Minimum of an arry

function max(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}

//Minimum of an arry
function min(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < min) {
            min = element;
        }
    }
    return min;
}

console.log('Max: ', max(numbers));
console.log('Min: ', min(numbers));