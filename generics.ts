function users<T>(data: T): T {
    return data;
}
console.log(users({ name: "Vishal", age: 0 }))
/** Note -
 * Generics functions are used for re-usability.
 *  generic function can get all type of output or input.
 */