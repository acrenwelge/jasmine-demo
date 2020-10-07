describe('Employee', () => {
    var Employee = require('../../src/Employee');
    let employee;

    beforeEach(() => {
        employee = new Employee();
    });

    it('should set salary above minimum', () => {
        employee.setSalary(50000);
        expect(employee.salary).toEqual(50000);
    });

    it('should not allow setting salary below minimum', () => {
        expect(() => {
            employee.setSalary(10000);
        }).toThrowError("Salary cannot be less than 25000");
    });

    it('should set a valid department', () => {
        employee.setDepartment("HR");
        expect(employee.dept).toBe("HR");
    });

    it('should not set an invalid dept', () => {
        expect(() => {
            employee.setDepartment("FINANCE");
        }).toThrowError("Not a valid department");
    });

    it('should give a raise', () => {
        employee.setSalary(50000);
        employee.giveRaise(10);
        expect(employee.salary).toEqual(55000);
    });
})