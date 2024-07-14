describe("Polymorphism", ()=> {

    class Employee {
        constructor(public name: string) {
        }
    }

    class Manager extends Employee {

    }

    class VicePresident extends Manager {

    }

    function sayHello(employee: Employee): void {
        if(employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Heloo VP ${vp.name}`)
        } else if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello manager ${manager.name}`)
        } else {
            console.info(`Hello employee ${employee.name}`)
        }
    }

    it("should be supported", () => {
        let employee: Employee = new Employee("Criston");
        console.info(employee)

        employee = new Manager("Criston")
        console.info(employee)

        employee = new VicePresident("Criston")
        console.info(employee)

    });

    it("should support method parameter polymorphism", () => {
        sayHello(new Employee("Criston"));
        sayHello(new Manager("Daemon"));
        sayHello(new VicePresident("Rhaenyra"));
    
    });
})