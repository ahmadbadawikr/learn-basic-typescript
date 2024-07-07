import {Category, Product} from "../src/type-alias";

describe('Type Alias', function(){
    it('should be supported in ts', function(){
      const category: Category = {
        id:1,
        name: "Handphone"
      };

      const product: Product = {
        id:1,
        name:"Samsung S24 Ultra",
        price: 23300000,
        category: category
      };

      console.info(category);
      console.info(product);
        
    })
})