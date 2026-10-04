
function factorial(n: number) { //fubciton creation, defining n is number
    if (n < 0) {                //if n is less than 0, return undefined, and print cannot compute
        console.log(`cannot compute for negative numbers`);
        return undefined;
    }
    if (n === 0 || n == 1) {  //if n is 0 or 1 return 1
        return 1;
    }
    let result = 1;            // assume result variable is 1
    if (n > 2) {
        for (let i = 2; i <= n; i++) {  //looping statement
            result *= i;
        }

    } return result;  //return result
}



console.log(factorial(5));//function call 