var Student = /** @class */ (function () {
    function Student(studentName, course) {
        this.studentName = studentName;
        this.course = course;
    }
    Student.prototype.displaydetails = function (studentName, course) {
        if (studentName === void 0) { studentName = this.studentName; }
        if (course === void 0) { course = this.course; }
        console.log('Student Name:', studentName);
        console.log('Course:', course);
    };
    return Student;
}());
var student_details = new Student('Hari', 'Playwright with Typescript');
student_details.displaydetails();
var student_details1 = new Student('Rame', 'Selenium with Jave');
student_details1.displaydetails();
