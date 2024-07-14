describe("Inheritance", () => {

    // Parent Class

    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`)
        }
    }

    class Manager extends Employee {
        title: string;

        constructor(name: string, title: string) {
            super(name);
            this.title = title;
        }

        sayHello(name: string): void {
            super.sayHello(name)
            console.info(`I am the great ${this.title}`)
        }
    }

    class Director extends Manager {
        salary: number;

        constructor(name: string, title: string, salary: number) {
            super(name, title);
            this.salary = salary;
        }

    }

    it("Should support Inheritance", () => {

        const employee = new Employee("Ned");
        console.info(employee.name);
        employee.sayHello(employee.name)
        
        const manager = new Manager("Eddard", "Lord of Winterfell");
        console.info(manager.name);
        console.info(manager.title);
        manager.sayHello(manager.name)

        const director = new Director("Aemon", "Maester of castle Black", 190220);
        console.info(director.name);
        console.info(director.title);
        console.info(director.salary);

    })

})