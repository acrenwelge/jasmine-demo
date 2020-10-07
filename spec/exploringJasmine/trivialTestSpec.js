describe('this is a test suite which...', () => {
    it('test some jasmine asserts', () => {
        expect(true).toBe(true);
        expect(true).not.toBe(false);
        expect(null).toBeNull();
        let a = 5;
        expect(a).toBeDefined();
    });

    it('tests more asserts', () => {
        expect({}).toBeTruthy();
        expect(0).toBeFalsy();
    });

    it('check math operations', () => {
        expect(2+2).toEqual(4);
        const x = 50;
        expect(x).toBeGreaterThan(40);
        expect(x).toBeLessThan(100);
    });

    it('check strings', () => {
        expect("hello world").toContain("hello");
        expect("goodbye").toMatch(/[gG]o+dbye/);
    });
})