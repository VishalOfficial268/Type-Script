// export {}

/** Type declrations: with Premitive Data Types */
let numbers1:number = 1312312;


const decimalNumber:number = 100.4324;
const myCharctor:string = "Hi I am learning type script";
const booloeanVal:boolean = true;
let checkUndefinedValue:undefined = undefined;
let checkNullValue:null = null;
let todayDateCheck:Date = new Date();
let checkNanValue:number = NaN;
// let mySymbol:symbol = Symbol('id'); need to check:


// console.log(todayDateCheck);

/** Type declrations: with Non-Premitive Data Types */

//working with Array:
let stringArr:string[] = ["Vishal", "Aaditya", "Krishna", "Sunil"];
let numbersArr:number[] = [1,2,3,4,5,6];
const booleanArr:boolean[] = [true, false];
let anyTypeofArr: any[] = [12,5, "sdfsfd", true, 2.2];

//working with Object:

let users1 = {name: "Bruce Wayne", role: "Batman", isDCProduction: true};
console.warn(users1);


/** Using interface: */
//interface is like kind of schema type:
interface userType {
    name: string,
    age: number,
    address: any
}

let users2:userType = {
    name:"Vishal",
    age: 27,
    address: "marlo Park Avenue"
}


/** Using any keyward */

let anotherUser:any = {
    isAdmin: true,
    role:"software engineer"
}