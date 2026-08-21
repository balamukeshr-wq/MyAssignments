var num=32768
function oddorEven(num){
    if(num%2 ===0){
        console.log("the number is even")
    }else{
        console.log("the number is odd")
    }
}
oddorEven(num)

// the oddorEven() will be always odd if nothing is given defined 
// since it becomes wiht no value it will be undefined --> leading to odd
// pass arguments inside () as shown
// always use === 