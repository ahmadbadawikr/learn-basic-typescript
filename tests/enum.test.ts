import { CustomerType } from "../src/enum"

describe("Enum", function(){
    it("should be right", function(){
        const customer ={
            id:1,
            name:"Jamal",
            type: CustomerType.GOLD
        };

        console.info(customer);
    })

})