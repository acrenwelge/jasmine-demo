class Company {
    constructor(employees) {
        this.employees = employees || [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    calculateTotalPayroll() {
        let totPayroll = 0;
        for (let empl of this.employees) {
            totPayroll += empl.salary;
        }
        return totPayroll;
    }

    getTotalsPerDept() {
        let totals = {};
        for (let empl of this.employees) {
            if (totals[empl.dept]) {
                totals[empl.dept]++;
            } else {
                totals[empl.dept] = 1;
            }
        }
        return totals;
    }

    giveRaisesToAll(percentRaise) {
        this.employees.forEach(empl => {
            empl.giveRaise(percentRaise);
        });
    }
}

module.exports = Company;