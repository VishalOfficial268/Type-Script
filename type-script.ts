/** Tuples in Typescript */
// let role: string[] | number[] = ["admin", 1] //will not be assignable
let role2: [string, number] = ["admin", 2] //acceptable because of tuple
let role3: [string, string, string, number] = ["admin", 'manager', 'cto', 22];
let role4: [string, boolean, number?] = ["admin", true, 7777]



/** Note - 
 *  tupel is the advance version of the js array.
 *  in tuple we have the fixed length based on the assigned types
 *  in tuple we assign the type by the sequence for eg. check role3 (starting 3 element will be only string not others)
 *  the question marke says that the other element we can accept as number
 */



/** Literal Type in Typescript: */
function combine(a: number | string, b: number | string, type: "as-number" | "as-string") {
    console.log(type)
    if (type === "as-number") {
        return (+a) + (+b)
    } else {
        return a.toString() + b.toString();
    }
}
// console.log(combine(10, 40, "as-number"));
// console.log(combine("Aadi", "Vishu", "as-string"));

/**
 * Need check
 */



/** Type Alias */
let a: string | number | undefined = 10;
let b: string | number | undefined = 20;
let c: string | number | undefined = undefined

type my_custom_type = string | number | undefined
let x: my_custom_type = 10;
let y: my_custom_type = 20;
let z: my_custom_type = undefined;

/** Note -
 *  A type which is used as variable and later on we reuse that variable for defining the type as re-usable 
      type called alias type.
 *  here the a, b, c varaiables are using the same type so for the solution we can use alias.
 *  for the code re-useablity and mentain by the some or single changes we should use.
 *  the same code as a, b, c is as like used in x, y, z (by defining alias types)
 */



/** Function Type */

function funcType1() {
    return "I am string.";
    // here by default type is string because of the return statement.
}

function funcType2() {
    return 100;
    // here by default type is number because of the return statement.
}

function funcType3(a: number, b: number): number {
    return a + b;
    // here we have change the function type as number which should always give the number.
}


/** Note -
 *  A function whatever type return by the return statement is called a function type.
 *  e.g - if a function return a number type value then the function type will be number.
 *  A function can also be defined
 */





/** Void type in Typescript */
function dataType(): void {
    console.log("Bhai nothing to return");
}

/** Note -
 *  A function whcih gives nothing as result or nothing to return, is called void function.
 *  Althought if function is not returning anything it means that it is void type function but
    if we still want or want to pre-define then we can use :void for making void type functions.
 */



/** Unknow type in Typescript */
let data: unknown;
data = 20;
data = "mystring";
data = true;

let item: string;
// item = data; //gives the error

if (typeof data === 'string') {
    item = data;
}

/** Note -
 *  Unknown type is used in the case of when the data is comming or by any data is not defined and not sure
    what kind of or what type of data will be.
 *  similarity in unknown and any is that both accepts any kind of data as number,string, boolean etc.
 */



/** Never Type in typescript */
function checkUndefined() {
    // this will return as undefined:
}


// function useOfNeverCase(msg, code): never {
//     throw { errorMessage: msg, statusCode: code }
// }
// console.log(useOfNeverCase("Server side APIs error", 500));
/** Note -
 *  When a function gives nothing as return still it returns "undefined" but if the function got any kind of 
        error then the code will be broken and at that time we can use :never.
 *  By default if function is not returning any type it means it is :void type and also still we can define 
       :never type in case of error scenario.
 */




/** Short hand in classes */

class User {
    name;
    age;
    email;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    displayValues() {
        console.log(this.name, this.age, this.email)
    }
}

let u1 = new User("Aadi", 27, "aadivishu4@gmail.com")
u1.displayValues();


class User2 {
    constructor(public name, public age, public email) { }
    displayPublicValues() {
        console.log(this.name, this.age, this.email);
    }
}

let u2 = new User2("Vishal Official", 27, "vishalofficial268@gmail.com");
u2.displayPublicValues();