"use strict";
/* let r=(a:number)=>{    console.log(a)}
r(10) */
class employee {
    constructor(name, age, dept, salary) {
        this.name = name;
        this.age = age;
        this.dept = dept;
        this.salary = salary;
    }
    details() {
        console.log(`user details: name ${this.name} age ${this.age} dept ${this.dept}
        and salary of the employee is ${this.salary}`);
        console.log("\n");
    }
    increment() {
        this.salary = this.salary + (this.salary * .1);
    }
}
const emp_one = new employee("srujan", 22, "dev", 100000);
emp_one.details();
emp_one.increment();
emp_one.details();
