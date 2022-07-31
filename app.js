// export {}
/** Type declrations: with Premitive Data Types */
var numbers1 = 1312312;
var decimalNumber = 100.4324;
var myCharctor = "Hi I am learning type script";
var booloeanVal = true;
var checkUndefinedValue = undefined;
var checkNullValue = null;
var todayDateCheck = new Date();
var checkNanValue = NaN;
// console.log(todayDateCheck);
/** DOUBT -
 *  How to work with symbol in ts.
 *  What will be the type for date object.
 */
/** Type declrations: with Non-Premitive Data Types */
//working with Array:
var simpleArray = ['Javascript', 'NoeJs']; //automatic type decided string based on the current types in array:
var stringArr = ["Vishal", "Aaditya", "Krishna", "Sunil"];
var numbersArr = [1, 2, 3, 4, 5, 6];
var booleanArr = [true, false];
var anyTypeofArr = [12, 5, "sdfsfd", true, 2.2];
stringArr.push("New Elements");
/** NOTE -
 * Initially array types decided by the ts automatically, whatever type will be there in initial it all will be type and acceptable.
 * In string type only string will be pushed & similarly others like numbers, booleans etc.
 */
//working with Object:
var users1 = { name: "Bruce Wayne", role: "Batman", isDCProduction: true };
console.warn(users1);
var users2 = {
    name: "Vishal",
    age: 27,
    address: "marlo Park Avenue"
};
/** Using any keyward */
var anotherUser = {
    isAdmin: true,
    role: "software engineer"
};
/** NOTE -
 *  any type means that the particular variable, particular array or particular object can be any type.
 *  any type will not restrict any kind of type change like from string to number, boolean, null any.
 */ 
