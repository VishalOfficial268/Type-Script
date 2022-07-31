export { }


/** Type declarations: with Primitive Data Types */
let numbers1: number = 1312312;
let decimalNumber: number = 100.4324;
let myCharctor: string = "Hi I am learning type script";
let booloeanVal: boolean = true;
let checkUndefinedValue: undefined = undefined;
let checkNullValue: null = null;
let todayDateCheck: Date = new Date();
let checkNanValue: number = NaN;

// console.log(todayDateCheck);
/** DOUBT -
 *  How to work with symbol in ts.
 *  What will be the type for date object.
 */





/** Type declarations: with Non-Primitive Data Types */
//working with Array:
let simpleArray = ['Javascript', 'NoeJs'] //automatic type decided string based on the current types in array:
let stringArr: string[] = ["Vishal", "Aaditya", "Krishna", "Sunil"];
let numbersArr: number[] = [1, 2, 3, 4, 5, 6];
let booleanArr: boolean[] = [true, false];
let anyTypeofArr: any[] = [12, 5, "sdfsfd", true, 2.2];
stringArr.push("New Elements");

/** NOTE -
 * Initially array types decided by the ts automatically, whatever type will be there in initial it all will be type and acceptable.
 * In string type only string will be pushed & similarly others like numbers, booleans etc.
 */





//working with Object:
let users1 = { name: "Bruce Wayne", role: "Batman", isDCProduction: true };
// console.warn(users1);

/** NOTE -
 * In initially it was string and boolean so can't assign another type.
 * Initially, there was not number type that's why number type can not be assigned or insert.
 * New key also can not be assigned or inserted.
 */


/** Using interface: */
//interface is like kind of schema type:
interface userType {
    name: string,
    age: number,
    address: any
}


let users2: userType = {
    name: "Vishal",
    age: 27,
    address: "marlo Park Avenue"
}


interface usersMethod {
    firstname: string,
    lastname: string,
    age: number,
    isAdmin: boolean,
    isActive: boolean,
    getFullName: () => string
}

let user3: usersMethod = {

    firstname: "Vishal",
    lastname: "Gupta",
    age: 27,
    isActive: true,
    isAdmin: true,
    getFullName() {
        return this.firstname + " " + this.lastname
    },
}

// console.log(user3.getFullName());


/** Using any keyword */
let anotherUser: any = {
    isAdmin: true,
    role: "software engineer"
}
anotherUser.salary = 0.0001; //because of any, all type will be accepted.

/** NOTE -
 *  any type means that the particular variable, particular array or particular object can be any type.
 *  any type will not restrict any kind of type change like from string to number, boolean, null any.
 */






/** Union Types */
let mydata: string | number | boolean = "Hi I am data"; //default - string:

/** NOTE -
 *  any is also solution for the other types of data re-assign but that's not right way specially if we know possible data types of 'mydata' variable.
 *  We can use union type define by the pipe | symbol and multiple type we can assign.
 */



/** functions */
function func1(): number {
    return 100;
}
console.log(func1());

function func2(): string {
    return "I am string"
}
// console.log(func2())

function func3(a, b): number {
    return a + b;
}
// console.log(func3(2, 5))
// console.log(func3("Vishal", " Gupta")) //no error ?

function func4(a: number, b: number): number {
    return a + b;
}
// console.log(func4(24, 6))

function func5(a: number, b?: number): number {
    return b ? a + b : a;
}
// console.log(func5(24));
// console.log(func5(24, 6));

/** NOTE -
 *  If function return type is mentioned as number it will return number or else gives error:
 *  If the parameter is defined as type the the argument will be accepted only in that particular type.
 *  If the args has possibility like that may not provide so we can use '?' in example 'func5'.
 *  if we provide the '?' mark means that, not mandatory args or parameter.
 */






/** Classes */
//Normal class in Js defined:
class App1 {
    firstname;
    lastname;
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFullName() {
        return this.firstname + " " + this.lastname
    }
}
// let app1 = new App1("Vishal", "Gupta");
// let app2 = new App1("Aadity", "Gupta");
// console.log(app1.getFullName());
// console.log(app2.getFullName());


//class defined in typescript:
class App2 {
    firstname: string;
    lastname: string;
    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFullName(): string {
        return this.firstname + " " + this.lastname
    }
}
// let app1 = new App2("John", "Doe");
// console.log(app1.getFullName());


/** NOTE -
 *  In classes if the var is already identified as string, number etc so keep
 * In method, if we have return statement then keep the type according to the return statement like - number string boolean etc.
 * If in the return statement nothing we have to return the in that case we need to use 'void'
 */





/** Inheritance Concepts: */
//Typescript:
class Parent {
    name: string;
    setname(name): void {
        this.name = name;
    }
}
class Child extends Parent {
    getname(): string {
        return this.name;
    }
}

let child1 = new Child();
child1.setname("Jack Sparrow");
console.log(child1.getname());




/** Namespace */
/// <reference path="utils.ts" />
namespace UserUtils {
    export class User extends Parent {
        getName() {
            return this.name;
        }
    }
}
let util = new UserUtils.User();
util.setname("Harry Potter");
console.log(util.getName());


/** NOTE -
 *  Namespace is out date fashion we don't need but in case of any chance.
 * In namespace we always have export the classes.
 * For the accessing or calling we have to go throw new instance of namespace e.g - new UserUtils.Users();
 * While using namespace it is also expected that to use as out file. 
 */





/** Module-wise Methods importing and exporting features or methods*/
import studentLogin from './Student';
import teacherLogin from './Teacher';
let teacher = new teacherLogin();
let student = new studentLogin();
console.log(teacher.data, student.data);


/** NOTE -
 * Module wise exports gives you the facility of the same class usages to anywhere
 * If we don't use the module the ts file will gives you an error as same name can not be used.
 * For compiling all files as ts file run - tsc *.ts -w
 */


