describe(`Object`, function () {
    it("should be supported", function(){
        const person: {id: number, name: string} = {
            id: 1,
            name: "James"
        };

        console.info(person);
    })
})