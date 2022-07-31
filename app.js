"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Type declrations: with Premitive Data Types */
let numbers1 = 1312312;
let decimalNumber = 100.4324;
let myCharctor = "Hi I am learning type script";
let booloeanVal = true;
let checkUndefinedValue = undefined;
let checkNullValue = null;
let todayDateCheck = new Date();
let checkNanValue = NaN;
// console.log(todayDateCheck);
/** DOUBT -
 *  How to work with symbol in ts.
 *  What will be the type for date object.
 */
/** Type declrations: with Non-Premitive Data Types */
//working with Array:
let simpleArray = ['Javascript', 'NoeJs']; //automatic type decided string based on the current types in array:
let stringArr = ["Vishal", "Aaditya", "Krishna", "Sunil"];
let numbersArr = [1, 2, 3, 4, 5, 6];
let booleanArr = [true, false];
let anyTypeofArr = [12, 5, "sdfsfd", true, 2.2];
stringArr.push("New Elements");
/** NOTE -
 * Initially array types decided by the ts automatically, whatever type will be there in initial it all will be type and acceptable.
 * In string type only string will be pushed & similarly others like numbers, booleans etc.
 */
//working with Object:
let users1 = { name: "Bruce Wayne", role: "Batman", isDCProduction: true };
let users2 = {
    name: "Vishal",
    age: 27,
    address: "marlo Park Avenue"
};
let user3 = {
    firstname: "Vishal",
    lastname: "Gupta",
    age: 27,
    isActive: true,
    isAdmin: true,
    getFullName() {
        return this.firstname + " " + this.lastname;
    },
};
// console.log(user3.getFullName());
/** Using any keyward */
let anotherUser = {
    isAdmin: true,
    role: "software engineer"
};
anotherUser.salary = 0.0001; //because of any, all type will be accepted.
/** NOTE -
 *  any type means that the particular variable, particular array or particular object can be any type.
 *  any type will not restrict any kind of type change like from string to number, boolean, null any.
 */
/** Union Types */
let mydata = "Hi I am data"; //default - string:
/** NOTE -
 *  any is also solution for the other types of data re-assign but that's not right way specially if we know possible data types of 'mydata' variable.
 *  We can use union type define by the pipe | symbol and multiple type we can assign.
 */
/** functions */
function func1() {
    return 100;
}
console.log(func1());
function func2() {
    return "I am string";
}
// console.log(func2())
function func3(a, b) {
    return a + b;
}
// console.log(func3(2, 5))
// console.log(func3("Vishal", " Gupta")) //no error ?
function func4(a, b) {
    return a + b;
}
// console.log(func4(24, 6))
function func5(a, b) {
    return b ? a + b : a;
}
// console.log(func5(24));
// console.log(func5(24, 6));
/** NOTE -
 *  If function return type is mentioned as number it will return number or else gives error:
 *  If the parameter is defined as type the the argument will be acceped only in that particular type.
 *  If the args has possibility like that may not provide so we can use '?' in example 'func5'.
 *  if we provide the '?' mark means that, not mandatory args or parameter.
 */
/** Classes */
//Normal class in Js defined:
class App1 {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getFullName() {
        return this.firstname + " " + this.lastname;
    }
}
// let app1 = new App1("Vishal", "Gupta");
// let app2 = new App1("Aadity", "Gupta");
// console.log(app1.getFullName());
// console.log(app2.getFullName());
//class defined in typescript:
class App2 {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getFullName() {
        return this.firstname + " " + this.lastname;
    }
}
// let app1 = new App2("John", "Doe");
// console.log(app1.getFullName());
/** NOTE -
 *  In classes if the var is already identified as string, number etc so keep
 * In method, if we have return statedment then keep the type according to the return statement like - number string boolean etc.
 * If in the return statement nothing we have to return the in that case we need to use 'void'
 */
/** Inheritance Concepts: */
//Typescript:
class Parent {
    setname(name) {
        this.name = name;
    }
}
class Child extends Parent {
    getname() {
        return this.name;
    }
}
let child1 = new Child();
child1.setname("Jack Sparrow");
console.log(child1.getname());
/** Namespace */
/// <reference path="utils.ts" />
var UserUtils;
(function (UserUtils) {
    class User extends Parent {
        getName() {
            return this.name;
        }
    }
    UserUtils.User = User;
})(UserUtils || (UserUtils = {}));
let util = new UserUtils.User();
util.setname("Harry Potter");
console.log(util.getName());
/** NOTE -
 *  Namespace is out date fashion we don't need but in case of any chance.
 * In namespace we always have export the classes.
 * For the accessing or calling we have to go throw new instance of namespace e.g - new UserUtils.Users();
 * While using namespace it is also expected that to use as out file.
 */
/** Module-wise Methods importing and exporting featurs or methods*/
const Student_1 = __importDefault(require("./Student"));
const Teacher_1 = __importDefault(require("./Teacher"));
let teacher = new Teacher_1.default();
let student = new Student_1.default();
console.log(teacher.data, student.data);
/** NOTE -
 * Module wise exports gives you the facility of the same class usases to anywhere
 * If we don't use the module the ts file will gives you an error as same name can not be used.
 * For compilling all files as ts file run - tsc *.ts -w
 */
