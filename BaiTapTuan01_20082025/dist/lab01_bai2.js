"use strict";
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getProfile() {
        return this.getInfor() + "" + this.grade;
    }
}
const nhien2 = new Student("Nhien", 21, 4);
console.log(nhien2.getProfile());
