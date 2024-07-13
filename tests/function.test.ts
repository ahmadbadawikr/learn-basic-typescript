describe("Function", function(){
    it("should support function in ts", function () {
        function sayHello(name:string): string {
            return `Hello ${name}`;
        }

        expect(sayHello("Donny")).toBe("Hello Donny")

        function printHello(name:string): void {
            console.info(`Hello ${name}`)
        }

        printHello("Donny")
    })

    it("should support default value", function () {
        function sayHello(name:string = "Guest"): string {
            return `Hello ${name}`;
        }

        expect(sayHello()).toBe("Hello Guest")
    })

    it("should support rest parameter", function () {
        function sum(...values: number[]): number {
            let total=0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1,2,3,4,5)).toBe(15);

        
    })

    it("should support function overload", function (){
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any): any {
            if(typeof value==="string"){
                return value.toUpperCase();
            }else if(typeof value==="number"){
                return value*10;
            }

        }

        expect(callMe(10)).toBe(100);
        expect(callMe("Aegon")).toBe("AEGON")
    })

    it("should function as parameter", function(){
        function sayHello(name:string, filter: (name:string) => string): string {
            return `Hello ${filter(name)}`;   
        }

        function toUpper(name:string): string {
            return name.toUpperCase();
        }

        expect(sayHello("Ultraman", toUpper)).toBe("Hello ULTRAMAN")

        expect(sayHello("Ultraman", function(name:string):string {
            return name.toUpperCase();
        })).toBe("Hello ULTRAMAN");
    })

})