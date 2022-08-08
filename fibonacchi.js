function fibo(number) {
    const series = [0, 1];
    for (let i = 2; i <= number; i++) {
        series[i] = series[i - 1] + series[i - 2];
        series.push(series[i]);
    }
    return series;
}
const number = 20;
console.log(fibo(20));
