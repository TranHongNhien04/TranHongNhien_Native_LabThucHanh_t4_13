class Student extends Person{
    grade: number;

    constructor(name: string, age: number, grade: number){
        super(name, age)
        this.grade = grade
    }

    getProfile(): string {
        return this.getInfor() + "" + this.grade;
    }
    
}

const nhien2 = new Student("Nhien", 21, 4)
console.log(nhien2.getProfile())