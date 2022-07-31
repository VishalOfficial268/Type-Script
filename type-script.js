/** Tuples in Typescript */
// let role: string[] | number[] = ["admin", 1] //will not be assignable
var role2 = ["admin", 2]; //acceptable because of tuple
var role3 = ["admin", 'manager', 'cto', 22];
var role4 = ["admin", true, 7777];
/** Note -
 *  tupel is the advance version of the js array.
 *  in tuple we have the fixed length based on the assigned types
 *  in tuple we assign the type by the sequence for eg. check role3 (starting 3 element will be only string not others)
 *  the question marke says that the other element we can accept as number
 */
/** Literal Type in Typescript: */
function combine(a, b, type) {
    console.log(type);
    if (type === "as-number") {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
}
// console.log(combine(10, 40, "as-number"));
// console.log(combine("Aadi", "Vishu", "as-string"));
/**
 * Need check
 */
/** Type Alias */
var a = 10;
var b = 20;
var c = undefined;
var x = 10;
var y = 20;
var z = undefined;
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
function funcType3(a, b) {
    return a + b;
    // here we have change the function type as number which should always give the number.
}
/** Note -
 *  A function whatever type return by the return statement is called a function type.
 *  e.g - if a function return a number type value then the function type will be number.
 *  A function can also be defined
 */
/** Void type in Typescript */
function dataType() {
    console.log("Bhai nothing to return");
}
/** Note -
 *  A function whcih gives nothing as result or nothing to return, is called void function.
 *  Althought if function is not returning anything it means that it is void type function but
    if we still want or want to pre-define then we can use :void for making void type functions.
 */
/** Unknow type in Typescript */
var data;
data = 20;
data = "mystring";
data = true;
var item;
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
var User = /** @class */ (function () {
    function User(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    User.prototype.displayValues = function () {
        console.log(this.name, this.age, this.email);
    };
    return User;
}());
var u1 = new User("Aadi", 27, "aadivishu4@gmail.com");
u1.displayValues();
var User2 = /** @class */ (function () {
    function User2(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    User2.prototype.displayPublicValues = function () {
        console.log(this.name, this.age, this.email);
    };
    return User2;
}());
var u2 = new User2("Vishal Official", 27, "vishalofficial268@gmail.com");
u2.displayPublicValues();
