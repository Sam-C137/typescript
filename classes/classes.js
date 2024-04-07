"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayRoll = exports.Employee = void 0;
class Employee {
    get Id() {
        return this.id;
    }
    set Id(value) {
        this.id = value;
    }
    get Name() {
        return this.name;
    }
    set Name(value) {
        this.name = value;
    }
    get Salary() {
        return this.salary;
    }
    set Salary(value) {
        this.salary = value;
    }
}
exports.Employee = Employee;
class PayRoll {
    constructor() {
        this.employees = [];
    }
    addEmployee(id, name, salary) {
        const employee = new Employee();
        employee.Id = id;
        employee.Name = name;
        employee.Salary = salary;
        this.employees.push(employee);
    }
    generatePaySlip() {
        for (let employee of this.employees) {
            console.log(employee.Id, employee.Name, employee.Salary);
        }
    }
}
exports.PayRoll = PayRoll;
function main() {
    const payRoll = new PayRoll();
    payRoll.addEmployee(1, "John", 1000);
    payRoll.addEmployee(2, "Doe", 2000);
    payRoll.generatePaySlip();
}
main();
