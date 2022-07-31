/** enums usase: */
var Days1;
(function (Days1) {
    Days1[Days1["monday"] = 0] = "monday";
    Days1[Days1["tuesday"] = 1] = "tuesday";
    Days1[Days1["wednesday"] = 2] = "wednesday";
    Days1[Days1["thursday"] = 3] = "thursday";
    Days1[Days1["friday"] = 4] = "friday";
    Days1[Days1["saturday"] = 5] = "saturday";
    Days1[Days1["sunday"] = 6] = "sunday";
})(Days1 || (Days1 = {}));
var Days2;
(function (Days2) {
    Days2["monday"] = "Mon";
    Days2["tuesday"] = "Tuesday";
    Days2["wednesday"] = "Wednesday";
    Days2["thursday"] = "Thursday";
    Days2["friday"] = "Friday";
    Days2["saturday"] = "Saturday";
    Days2["sunday"] = "Sunday";
})(Days2 || (Days2 = {}));
var whichDay;
var capsDay;
whichDay = Days1.sunday; //output:6 as like array index.
capsDay = Days2.sunday; //output:6 as like array index.
console.log(whichDay);
console.log(capsDay);
// whichDay = "NoDay" // will give error
/** enum usases in functions */
var Days3;
(function (Days3) {
    Days3["monday"] = "Mon";
    Days3["tuesday"] = "Tuesday";
    Days3["wednesday"] = "Wednesday";
    Days3["thursday"] = "Thursday";
    Days3["friday"] = "Friday";
    Days3["saturday"] = "Saturday";
    Days3["sunday"] = "Sunday";
})(Days3 || (Days3 = {}));
function whichDays(day) {
    return day;
}
console.log(whichDays(Days3.friday));
/** Note -
 *  The data will only from the enum declared data should be.
 *  Without declared data will be gives the error.
 *  Another data will not be assigned from the outside.
 *  We can also give sthe values eg. 2nd example Days2
 *  If we don't gives the value as Monday etc in the enum then It will starts from 0 as like array index.
 *  If we have assigned the first value monday=10 it wil started from the 10 as like array index.
 */
