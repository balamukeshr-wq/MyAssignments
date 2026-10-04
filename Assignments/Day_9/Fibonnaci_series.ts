function generateFibonacci(terms: number): number[] {//funcgion declration ,terms and number array declared
    if (terms <= 0) return [];//less than 0 empty array is returned
    if (terms === 1) return [1];//eqaul to 1 means 1 is stored and returned

    // Initialize the series with the first two numbers
    const series: number[] =[0,1];//first and 2nd vales are stored

    // Loop starts from index 2 up to the requested number of terms
    for (let i = 2; i < terms; i++) {
        // Next number = sum of the previous two numbers
        const nextNumber = series[i - 1] + series[i - 2];
        series.push(nextNumber);//the resull is pushed to series
    }

    return series;
}

const Fibonacci_seq:number[]=generateFibonacci(5);
console.log(Fibonacci_seq)