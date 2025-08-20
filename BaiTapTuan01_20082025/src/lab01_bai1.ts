class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getInfor(){
        return "My name is " + this.name + 
                " and I'm" + this.age;
    }
}

const nhien = new Person("Nhien", 20)
console.log(nhien.getInfor)




