describe("Instanceof", () => {

    class Employee {}
        class Manager {}

        const robert = new Employee()
        const rhaegar = new Manager()

    it("should have prolem using typeof", () => {
        console.info(typeof rhaegar);
    })

    it("should be supported of instanceof", () => {
        
        expect(robert instanceof Employee).toBe(true)
        expect(rhaegar instanceof Employee).toBe(false)
    })
})