
function make_avg(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        var number = numbers[i];
        total = total + number;
    }
    var avg = total / numbers.length;
    return avg;
}
var numbers = [10, 10];
console.log(make_avg(numbers));
