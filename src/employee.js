class Employee {
    static MIN_SALARY = 25000;
    static DEPARTMENTS = ["HR", "IT", "SALES", "ACCOUNTING"];

    constructor(name, dept, salary) {
        this.name = name;
        this.dept = dept;
        this.salary = salary;
    }

    setSalary(sal) {
        if (sal >= Employee.MIN_SALARY) {
            this.salary = sal;
        } else {
            throw new Error(`Salary cannot be less than ${Employee.MIN_SALARY}`);
        }
    }

    setDepartment(dept) {
        if (Employee.DEPARTMENTS.includes(dept)) {
            this.dept = dept;
        } else {
            throw new Error("Not a valid department");
        }
    }

    giveRaise(percentRaise) {
        this.salary = +(this.salary * (1 + percentRaise / 100)).toFixed(2);
    }
}

module.exports = Employee;