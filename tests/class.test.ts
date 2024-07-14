describe("Class", function(){

    class Customer {
        constructor(){
            console.info("Create a new customer");
        }
    }

    class Order {

    }

    it("Should be able to create class", () => {
        
        const customer: Customer = new Customer();
        const order: Order = new Order();
    });

    it("should be able to create constructors", () => {
        new Customer();
        new Customer();
    })
})