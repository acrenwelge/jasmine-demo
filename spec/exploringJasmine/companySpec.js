describe("Company", () => {
    let Company = require('../../src/Company');
    let Employee = require('../../src/Employee');
    let company;

    beforeEach(() => {
        company = new Company();
    })

    it('should add an employee', () => {
        company.addEmployee(new Employee("Nick","IT", 50000));
        expect(company.employees.length).toEqual(1);
        expect(company.employees[0].name).toBe("Nick");
    });

    it("should calculate payroll", () => {
        company.addEmployee(new Employee("Angela", "ACCOUNTING", 50000));
        company.addEmployee(new Employee("Dwight", "SALES", 80000));
        company.addEmployee(new Employee("Jim", "SALES", 70000));
        expect(company.calculateTotalPayroll()).toEqual(200000);
    });

    it('should count members of each department', () => {
        company.addEmployee(new Employee("Angela", "ACCOUNTING", 50000));
        company.addEmployee(new Employee("Kevin", "ACCOUNTING", 50000));
        company.addEmployee(new Employee("Oscar", "ACCOUNTING", 50000));
        company.addEmployee(new Employee("Dwight", "SALES", 50000));
        company.addEmployee(new Employee("Nick", "IT", 50000));
        company.addEmployee(new Employee("Toby", "HR", 50000));
        const headcount = company.getTotalsPerDept();
        expect(headcount["HR"]).toEqual(1);
        expect(headcount["ACCOUNTING"]).toEqual(3);
        expect(headcount["SALES"]).toEqual(1);
        expect(headcount["IT"]).toEqual(1);
    });

    it('should give out raises to all employees', () => {
        let angela = new Employee("Angela", "ACCOUNTING", 50000);
        let kevin = new Employee("Kevin", "ACCOUNTING", 50000);
        const amount = 20;
        spyOn(angela, 'giveRaise');
        spyOn(kevin, 'giveRaise');
        company.addEmployee(angela);
        company.addEmployee(kevin);
        company.giveRaisesToAll(amount);
        expect(angela.giveRaise).toHaveBeenCalled();
        expect(kevin.giveRaise).toHaveBeenCalledWith(amount);
    });
})