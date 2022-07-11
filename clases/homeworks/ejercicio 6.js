function sumaYStrings(a, b) {
    return a + b;
} //que pasa si yo quisiera concatenar strings con esta funcion?
//         |
//        \/
function soloStrings(a, b) {
    return a + b;
} //this i guess(before seeing the class)
//basically the structure its the following:
//function functionName(parameter1: PARAMETER1_TYPE, parameter2: PARAMETER2_TYPE): RETURN_TYPE {}
//so...
var resultado1 = sumaYStrings(2, 2); // if we hover the variable, it gets the type of our return (RETURN_TYPE)
//void
//as we se later,the void is used for functions without a return, for example, as when a function just return a console.log()
//or when setting a state in react.
function voidFunction(something) {
    console.log("voidFunction says: " + something);
}
voidFunction("hola");
//never
//this is used for functions that never return, for example, when a function throws an error.
function neverFunction(msg) {
    throw new Error(msg);
    console.log("neverFunction says: " + msg); //this will never be executed
}
// the idea is that the execution never reaches the end of the function, so it never returns.
//remember that in TypeScript, we always can delacre a optional parameter
function optionalParameter(a, b, c) {
    var result = c ? (a + b + c) : (a + b); //this is an adecuate (and safe) implementation for the optional parameter
    console.log(result);
}
//aca vamos a cambiar todos los return por console.log() para testeo, e inevitablemente cambiamos el tipo de return a Void.
optionalParameter(2, 2, 5); //9
//in Javascript we can sum a number with a string,
//but in TypeScript some thigns happens
function suma2(a, b) {
    if (typeof a === "number" && typeof b === "number")
        console.log(a + b);
    if (typeof a === "string" && typeof b === "string")
        console.log(a + b);
    if (typeof a === "number" && typeof b === "string")
        console.log(a + b);
    if (typeof a === "string" && typeof b === "number")
        console.log(a + b);
}
suma2(2, 2); //4
suma2("2", "2"); //"22"
suma2(2, "2"); //?
//or we can create a lot of ways to resolve this
function suma3(a, b) {
    if (typeof a === "string") {
        a = parseInt(a);
    }
    if (typeof b === "string") {
        b = parseInt(b);
    }
    return a + b;
}
//in this case we always return a number.
// but keep whit the lessons, there's more to solve this.
neverFunction("ERROR!");
//this works BUT ends the execution of the script.so we put it in the end.
