describe("Parameter Properties", () => {

    class Person {
        constructor(public name: string) {
        }
    }

    it("Should be supported", () => {
        const person = new Person("Aegon")
        console.info(person.name)

    })
})