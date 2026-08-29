function twoSums() {  //function declartation
    const nums = [2, 4, 7, 8, 11, 14] //target array
    const target = 18;  //target sum
    const result = []; //empty array for result
    for (let i = 0; i < nums.length; i++) {  // outer loop for first index
        for (let j = i + 1; j < nums.length; j++) { // inner loop for second index
            if (nums[i] + nums[j] === target) { // comparing it with target value
                result.push([nums[i], nums[j]]) //pushing the compared value if matched
            }

        }
    }
    console.log(result)// output for results
}
twoSums()// function call