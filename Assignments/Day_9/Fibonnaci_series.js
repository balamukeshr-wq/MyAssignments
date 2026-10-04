function generateFibonacci(terms) {
    if (terms <= 0)
        return [];
    if (terms === 1)
        return [1];
    // Initialize the series with the first two numbers
    var series = [0, 1];
    // Loop starts from index 2 up to the requested number of terms
    for (var i = 2; i < terms; i++) {
        // Next number = sum of the previous two numbers
        var nextNumber = series[i - 1] + series[i - 2];
        series.push(nextNumber);
    }
    return series;
}
var Fibonacci_seq = generateFibonacci(5);
console.log(Fibonacci_seq);
