describe('Union Type', function(){
    it('should supported in ts', function(){
        let sample: number | string | boolean = 'Dvakagarbaharad';
        console.info(sample);

        sample=1000;
        console.info(sample);
    });
    it('should supported typeof operator', function(){
        function process(value: number | string | boolean){
            if(typeof value === 'string'){
                return value.toUpperCase();
            } else if(typeof value === 'number'){
                return value+2;
            } else{
                return !value;
            }
        }

        expect(process("anthony")).toBe("ANTHONY");
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
        
    })
})