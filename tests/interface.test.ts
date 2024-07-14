import { Seller } from "../src/seller"
import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person"

describe("Interface", function(){
    it("Should supported in ts", function(){
        const seller: Seller = {
            id:1,
            name: "Shop ABCDE",
            nib: "9797112",
            npwp:"00012120"
        };

        console.info(seller)
    });

    it("should support function interface", function(){

        interface AddFunction {
            (value1: number, value2: number): number;
        }
    
        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        }
    
        expect(add(2,2)).toBe(4);
    });

    it("should support indexable interface", function (){

        interface StringArray {
            [intex: number]: string
        }

        const names: StringArray = ["Daemon", "Aemond", "Aegon"];
        console.info(names)
    });

    it("should support indexable interface for non number index", function (){

        interface StringDict {
            [intex: string]: string
        }

        const dictionary: StringDict = {
            "name": "Aemond",
            "address": "Aegonfort"
        };
        console.info(dictionary);

        expect(dictionary["name"]).toBe("Aemond");
        expect(dictionary["address"]).toBe("Aegonfort");
    })

    it("should support extends interface", function (){

        const employee: Employee = {
            id:"1",
            name:"Daemon",
            division:"Audit"
        }

        console.info(employee)

        const manager: Manager = {
            id:"2",
            name:"Viserys",
            division: "Audit",
            numberOfEmployees:30

        }

        console.info(manager)
    });

    it("should support function in interface", function (){
        

        const person: Person = {
            name: "Aemond",
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        }

        console.info(person.sayHello("Targaryen"));

    });

    it("support intersection types", function(){

        interface HasName {
            name: string
        }

        interface HasId {
            id: string
        }

        type Domain = HasId & HasName;

        const domain: Domain = {
            id:"1",
            name: "Daemon"
        };

        console.info(domain);
    });

    it("should support type assertion", function (){
        const person: any = {
            name:"Daemon",
            age: 55
        }
        const person2 : Person = person as Person;
        console.info(person2)

    })

    interface HasName {
        name: string;

    }

    interface CanSayHello {
        sayHello(name: string): void;
    }

    class Person implements HasName, CanSayHello{
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`)
        }
    }

    it("Should support Inheritance", () => {
        const person = new Person("Rhaegar");
        person.sayHello("Robert");
        
    })

});


