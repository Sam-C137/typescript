export class Employee {
    private id: number | undefined;
    private name: string | undefined;
    private salary: number | undefined;

    get Id(): typeof this.id {
        return this.id;
    }

    set Id(value: number) {
        this.id = value;
    }

    get Name(): typeof this.name {
        return this.name;
    }

    set Name(value: string) {
        this.name = value;
    }

    get Salary(): typeof this.salary {
        return this.salary;
    }

    set Salary(value: number) {
        this.salary = value;
    }
}

export class PayRoll {
    private employees: Employee[] = [];

    addEmployee(id: number, name: string, salary: number) {
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

function main() {
    const payRoll = new PayRoll();
    payRoll.addEmployee(1, "John", 1000);
    payRoll.addEmployee(2, "Doe", 2000);
    payRoll.generatePaySlip();
}

main();
