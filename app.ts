// export {}

/** Type declrations: with Premitive Data Types */
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





/** Type declrations: with Non-Premitive Data Types */
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
console.warn(users1);

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


/** Using any keyward */

let anotherUser: any = {
    isAdmin: true,
    role: "software engineer"
}

/** NOTE -
 *  any type means that the particular variable, particular array or particular object can be any type.
 *  any type will not restrict any kind of type change like from string to number, boolean, null any.
 */