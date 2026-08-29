const sumOfn = (n) => {               //arrow function
    let sum = 0                     //sum variable declaration
    if (n === 0) {
        console.log("the sum is 0")
    } else {
        for (let i = 1; i <= n; i++) {     //iterating i=1 to n
            sum = sum + i;                // sum increment 
            console.log(sum, i, "insideloop") // printing sum and i inside the loop
        }
    }
    console.log("the overall sum is ", sum) // print overall sum
}
sumOfn(5) // pasing n as parameter