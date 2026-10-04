class Student{
    studentName:string
    course:string

    constructor(studentName:string,course:string){
        this.studentName = studentName
        this.course = course
    }
    displaydetails(studentName:string = this.studentName, course:string = this.course){
        console.log('Student Name:', studentName);
        console.log('Course:', course);
    }

}
const student_details=new Student('Hari','Playwright with Typescript');
student_details.displaydetails();
const student_details1=new Student('Ram','Selenium with Java')
student_details1.displaydetails();