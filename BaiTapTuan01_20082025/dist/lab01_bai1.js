"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfor() {
        return "My name is " + this.name +
            " and I'm" + this.age;
    }
}
const nhien = new Person("Nhien", 20);
console.log(nhien.getInfor());
