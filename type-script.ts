/** Tuples in Typescript */
// let role: string[] | number[] = ["admin", 1] //will not be assignable
let role2: [string, number] = ["admin", 2] //acceptable because of tuple
let role3: [string, string, string, number] = ["admin", 'manager', 'cto', 22];
let role4: [string, boolean, number?] = ["admin", true, 7777]



/** Note - 
 *  tupel is the advance version of the js array.
 *  in tuple we have the fixed length based on the assigned types
 *  in tuple we assign the type by the sequence for eg. check role3 (starting 3 element will be only string not others)
 *  the question marke says that the other element we can accept as number
 */



/** Literal Type in Typescript: */
function combine(a: number | string, b: number | string, type: "as-number" | "as-string") {
    console.log(type)
    if (type === "as-number") {
        return (+a) + (+b)
    } else {
        return a.toString() + b.toString();
    }
}
// console.log(combine(10, 40, "as-number"));
// console.log(combine("Aadi", "Vishu", "as-string"));

/**
 * Need check
 */



/** Type Alias */
let a: string | number | undefined = 10;
let b: string | number | undefined = 20;
let c: string | number | undefined = undefined

type my_custom_type = string | number | undefined
let x: my_custom_type = 10;
let y: my_custom_type = 20;
let z: my_custom_type = undefined;

/** Note -
 *  A type which is used as variable and later on we reuse that variable for defining the type as re-usable 
      type called alias type.
 *  here the a, b, c varaiables are using the same type so for the solution we can use alias.
 *  for the code re-useablity and mentain by the some or single changes we should use.
 *  the same code as a, b, c is as like used in x, y, z (by defining alias types)
 */
