import { Seller } from "../src/seller"
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

});


