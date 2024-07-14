describe("Static", () => {

    class Configuration {
        static NAME: string = "Learn OOP of Typescript"
        static VERSION: number = 1.0;
        static AUTHOR: string = "Aegon the Conqueror"
    }

    it("Should be supported", () => {
        console.info(Configuration.NAME);
        console.info(Configuration.VERSION);
        console.info(Configuration.AUTHOR);
    })


    class MathUtil {

        static sum(...values: number[]): number {
            let total = 0;
            for (let value of values) {
                total += value;
            }
            return total;
        }
    }

    console.info(MathUtil.sum(1,2,3,4,5,6))
})