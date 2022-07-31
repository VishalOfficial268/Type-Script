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
    if (type === "as-number") {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(10, 40, "as-number");
console.log("Aadi", "Vishu", "as-string");
