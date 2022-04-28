// Unit Testing: Our first test with it

/**
 * Test Suite
 */
describe(`${Person.name} class`, () =>{

    let model;
    beforeEach(()=>{
        model = new Person();
        console.log("Before Each");
        
    })

    describe('default values', () =>{

        it('first name defaults to empty string', ()=>{
            
            console.log("first name");
            // arrange 
            // const data ={firstName: null};

            // act
            // const model = new Person(data);

            // assert 
            expect(model.firstName).toBe('');
        })

        it('last name defaults to empty string', ()=>{
            
            console.log("last name");
            // arrange 
            // const data ={lastName: null};

            // act
            // const model = new Person(data);

            // assert 
            expect(model.lastName).toBe('');
        })

        it('middle name defaults to empty string', ()=>{
            
            console.log("middle name");
            // arrange 
            // const data ={middleName: null};

            // act
            // const model = new Person(data);

            // assert 
            expect(model.middleName).toBe('');
        })
    });

    describe('full name', ()=>{

        beforeEach(()=>{
            model = new Person({
                firstName: 'Dylan', 
                lastName: 'Cheng',
            })
        })

        it('middle initial whe middle name is defined with', ()=>{
            // arrange 
            model.middleName = 'Oh';
            // act
            const result = model.fullName;
            // audit
            const {firstName: fn, lastName: ln, middleName: mn} = model;

            // assert
            expect(result).toBe(`${fn} ${mn[0]}. ${ln}`)

        })

        it('when NO middle name returns just first and last', ()=>{
            // arrange 
            model.middleName='';

            // act
            const result = model.fullName;

            // audit
            const {firstName: fn, lastName: ln} = model;

            // assert 
            expect(result).toBe(`${fn} ${ln}`);

        })
    })
});

