describe('Any', function(){
    it('should support any in typescript', function(){

        const person: any = {
            id:1,
            name:'Sir Richard Branson',
            age:76
        };

        person.age=88;
        person.address='US';

        console.info(person);
    })
})