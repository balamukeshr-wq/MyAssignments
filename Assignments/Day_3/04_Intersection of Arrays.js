const intersection = (array1, array2) => {           //arrow function
    const inter = [];                               //result array declared empty
    for (let i = 0; i < array1.length; i++) {      //outer loop for array1
        for (let j = 0; j < array2.length; j++) {     //inner loop for array2
            if (array1[i] === array2[j]) {                  //if both elements are same
                let found = false;                           //to check duplicate
                for (let k = 0; k < inter.length; k++) {       //// check whether the element already exists in inter
                    if (inter[k] === array1[i]) {              //if yes , it wont push
                        found = true;
                    }
                }
                if (found === false) {
                    inter.push(array1[i]);                        /// // if not found, push the element into inter
                }
            }
        }
    }
    console.log(inter);
};
const array1 = [1, 1, 2, 2, 3];
const array2 = [1, 2, 3, 3, 4];

intersection(array1, array2);

