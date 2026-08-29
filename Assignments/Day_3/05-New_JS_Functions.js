function userProfile(s) {   // named fucntion
    console.log("hello", s)     //printing with name
}
const s = "bb"                      //variable declration
userProfile(s)                //function call with parameter

const double = (n) => {             //arrow function
    console.log("the doubled value is", n * 2)  //printing and doubling the value
}
let n = 20 //variable declartion
double(n)//calling arrow function

setTimeout(function () {                   //anonymous function
    console.log("This message is delayed by 2 seconds");
}, 2000);                                   //delay specified

function getUserData(callback) {             // callback parameter
    setTimeout(function () {                //delayed using setTimeout function
        callback();
    }, 3000);                               //delay specified
}

getUserData(function () {//callback function

    console.log("Call Back Function");
});