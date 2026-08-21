function grades(marks){
    switch(true){
    case marks>90:
        console.log("the grade is S")
        break;
    case marks>= 80 && marks <= 90:
        console.log("the grade is A")
        break;
    case marks>=70 && marks <=80:
        console.log("the grade is B")
        break;
    case marks>=60 && marks<=70:
        console.log("the grade is C")
        break;
    case marks>=50 && marks <=60:
        console.log("the grade is E")
        break;
    case marks<50:
        console.log("fail")
        break;
    default:
        console.log("enter grade")
        break;
    
    }
}
grades('9')