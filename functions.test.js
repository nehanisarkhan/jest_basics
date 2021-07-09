const functions = require('./functions'); // to bring our function to be tested.


//toBe


test('Adds 2 + 2 equals 4', () =>{  //a description of what the test function does and the other parameter is the function.

expect(functions.add(2,2)).toBe(4);//here actual parameters are given along with a matcher(toBe) that checks the o/p.

});

//not.toBe

test('Adds 2 + 2 NOT equals 5', () =>{  //a description of what the test function does and the other parameter is the function.

    expect(functions.add(2,2)).not.toBe(5);
    
    });

 // CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false
//toBeNull
test('Should be null' , () => {

    expect(functions.isNull()).toBeNull();
   
});

//toBeFalsy
test('Should be falsy' , () => {

    expect(functions.checkValue(undefined)).toBeFalsy();
   
});

//toEqual
test('User should be Neha Khan object' , () => {

    expect(functions.createUser()).toEqual({firstName: 'Neha', lastName: 'Khan'});
   
});



// less than & greater than
test('Should be under 1000', () =>{

    const load1 = 400;
    const load2 = 300;
    expect(load1 + load2).toBeLessThanOrEqual(1000);
});


//Regex
test('There is no I/i in team', () =>{

    expect('team').not.toMatch(/I/i);
});

// Arrays
test('peter should be in userNames', () =>{
userNames = ['john','rose','peter']
    expect(userNames).toContain('peter');
});