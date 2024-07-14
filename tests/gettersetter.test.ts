describe("Getter and Setter", () => {

    class Category {
        _name?: string;

        get name(): string {
            if(this._name) {
                return this._name;
            } else {
                return "Empty";
            }
        }

        set name(value: string) {
            if(value != "") {
                this._name = value;
            }
        }
    }

    it("Should be supported in a class", () => {
        const category = new Category();
        
        category.name = "Food";
        console.info(category.name);


        category.name = "";
        console.info(category.name);

    })
})