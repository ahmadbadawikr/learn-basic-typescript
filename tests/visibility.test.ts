describe("Visibility", () => {
    class Counter {
        protected counter: number = 0

        public increment(): void {
            this.counter++
        }

        public getCounter(): number {
            return this.counter;
        }
    }

    class DoubleCounter extends Counter {

        public increment(): void {
            this.counter += 2;
        }
    }


    it("Should support private variables", () => {
        const counter = new Counter();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());

    })

    it("Should support protected variables", () => {
        const counter = new DoubleCounter();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());

    })
})