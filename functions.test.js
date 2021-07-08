const functions = require('./functions'); // to bring our function to be tested.


//test :-

test('Adds 2 + 2 equals 4', () =>{  //a description of what the test function does and the other parameter is the function.

expect(functions.add(2,2)).toBe(4);//here actual parameters are given along with a matcher(toBe) that checks the o/p.

});

test('Adds 2 + 2 NOT equals 5', () =>{  //a description of what the test function does and the other parameter is the function.

    expect(functions.add(2,2)).not.toBe(5);
    
    });

 // CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null' , () => {

    expect(functions.isNull()).toBeNull();
   
});


test('Should be falsy' , () => {

    expect(functions.checkValue(undefined)).toBeFalsy();
   
});


test('User should be Neha Khan object' , () => {

    expect(functions.createUser()).toEqual({firstName: 'Neha', lastName: 'Khan'});
   
});