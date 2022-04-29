describe("calculator", function(){

    beforeEach(function() {
        console.log("beforeEach is triggered");
        Calculator.currentVal = 0;
    });

    afterEach(function(){
        console.log("afterEach is triggered");
     });

    //test case: 1
    it("Should retain the current value of all time", function(){
        expect(Calculator.currentVal).toBeDefined(); // Null Check
        expect(Calculator.currentVal).toEqual(0);
        expect(Calculator.currentVal).toBeLessThan(5);
        expect(Calculator.currentVal).not.toEqual(5);
    });

    //test case: 2
    it("Should add numbers", function(){
       expect(Calculator.add(5)).toEqual(5);
       expect(Calculator.add(5)).toEqual(10);
       expect(Calculator.add(5.2)).toBeCloseTo(15.15,1);
       expect(Calculator.currentVal).toBeGreaterThan(5);
    });

    //test case: 3
    it("Should add any number of numbers", function(){
        expect(Calculator.addAny(1,2,3)).toEqual(6);
    });

    //test case: 4
    it("Should be a number", function(){
        // Not a number check
        expect(Calculator.add()).toBeNaN();
    });

    var throwMeAnError = ()=>{
        throw new Error();
    };

    //test case: 5
    it("Hey this will throw an error", ()=>{
        expect(throwMeAnError).toThrow();
    });
});