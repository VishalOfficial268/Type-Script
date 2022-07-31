/** enums usase: */
enum Days1 {
    monday, tuesday, wednesday, thursday, friday, saturday, sunday
}


enum Days2 {
    monday = "Mon",
    tuesday = "Tuesday",
    wednesday = "Wednesday",
    thursday = "Thursday",
    friday = "Friday",
    saturday = "Saturday",
    sunday = "Sunday"
}
let whichDay: Days1;
let capsDay: Days2;
whichDay = Days1.sunday; //output:6 as like array index.
capsDay = Days2.sunday; //output:6 as like array index.



console.log(whichDay);
console.log(capsDay)
// whichDay = "NoDay" // will give error


/** enum usases in functions */
enum Days3 {
    monday = "Mon",
    tuesday = "Tuesday",
    wednesday = "Wednesday",
    thursday = "Thursday",
    friday = "Friday",
    saturday = "Saturday",
    sunday = "Sunday"
}

function whichDays(day: Days3) {
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
