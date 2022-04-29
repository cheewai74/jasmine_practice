/**
 *  spyOn() is inbuilt into the Jasmine library.
 *  allows you to spy on a definite piece of code.
 */


describe("Example of jasmine Spy using spyOn()", function(){
    it('uses the dictionary to say "hello world"', function(){
        var dictionary = new Dictionary;
        var person = new Person;

        spyOn(dictionary, "hello"); // replace hello function with a spy
        spyOn(dictionary, "world"); // replace world function with another spy  

        person.sayHelloWorld(dictionary);

        // not possible without first spy
        expect(dictionary.hello).toHaveBeenCalled();

        // not possible without 2nd spy
        expect(dictionary.world).toHaveBeenCalled();

    });
});

describe("Example of jasmine using create spy", function () {
    it("can have a spy function", function(){
        var person = new Person();
        // getName11() function is not present in the person object in spy.
        // createSpy() method actually mimics the functionality of teh getName11().
        person.getName11 = jasmine.createSpy("Name spy");
        person.getName11();
        expect(person.getName11).toHaveBeenCalled();
    });
});