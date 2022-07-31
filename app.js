// export {}
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var users2 = {
    name: "Vishal",
    age: 27,
    address: "marlo Park Avenue"
};
var user3 = {
    firstname: "Vishal",
    lastname: "Gupta",
    age: 27,
    isActive: true,
    isAdmin: true,
    getFullName: function () {
        return this.firstname + " " + this.lastname;
    }
};
// console.log(user3.getFullName());
/** Using any keyward */
var anotherUser = {
    isAdmin: true,
    role: "software engineer"
};
anotherUser.salary = 0.0001; //because of any, all type will be accepted.
/** NOTE -
 *  any type means that the particular variable, particular array or particular object can be any type.
 *  any type will not restrict any kind of type change like from string to number, boolean, null any.
 */
/** Union Types */
var mydata = "Hi I am data"; //default - string:
/** NOTE -
 *  any is also solution for the other types of data re-assign but that's not right way specially if we know possible data types of 'mydata' variable.
 *  We can use union type define by the pipe | symbol and multiple type we can assign.
 */
/** functions */
function func1() {
    return 100;
}
// console.log(func1());
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
var App1 = /** @class */ (function () {
    function App1(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    App1.prototype.getFullName = function () {
        return this.firstname + " " + this.lastname;
    };
    return App1;
}());
// let app1 = new App1("Vishal", "Gupta");
// let app2 = new App1("Aadity", "Gupta");
// console.log(app1.getFullName());
// console.log(app2.getFullName());
//class defined in typescript:
var App2 = /** @class */ (function () {
    function App2(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    App2.prototype.getFullName = function () {
        return this.firstname + " " + this.lastname;
    };
    return App2;
}());
// let app1 = new App2("John", "Doe");
// console.log(app1.getFullName());
/** NOTE -
 *  In classes if the var is already identified as string, number etc so keep
 * In method, if we have return statedment then keep the type according to the return statement like - number string boolean etc.
 * If in the return statement nothing we have to return the in that case we need to use 'void'
 */
/** Inheritance Concepts: */
//Typescript:
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.setname = function (name) {
        this.name = name;
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.getname = function () {
        return this.name;
    };
    return Child;
}(Parent));
var child1 = new Child();
child1.setname("Jack Sparrow");
console.log(child1.getname());
/** Namespace */
/// <reference path="utils.ts" />
var UserUtils;
(function (UserUtils) {
    var Users = /** @class */ (function (_super) {
        __extends(Users, _super);
        function Users() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Users.prototype.getName = function () {
            return this.name;
        };
        return Users;
    }(Parent));
    UserUtils.Users = Users;
})(UserUtils || (UserUtils = {}));
var util = new UserUtils.Users();
util.setname("Harry Potter");
console.log(util.getName());
/** NOTE -
 *  Namespace is out date fashion we don't need but in case of any chance.
 * In namespace we always have export the classes.
 * For the accessing or calling we have to go throw new instance of namespace e.g - new UserUtils.Users();
 * While using namespace it is also expected that to use as out file.
 */ 
