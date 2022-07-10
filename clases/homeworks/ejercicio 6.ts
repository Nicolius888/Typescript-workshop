function  sumaYStrings(a: number, b: number): number {
    return a + b
} //que pasa si yo quisiera concatenar strings con esta funcion?
//         |
//        \/
function soloStrings(a: string, b: string): string {
    return a + b
} //this i guess(before seeing the class)

//basically the structure its the following:
//function functionName(parameter1: PARAMETER1_TYPE, parameter2: PARAMETER2_TYPE): RETURN_TYPE {}


//so...
let resultado1 = sumaYStrings(2, 2); // if we hover the variable, it gets the type of our return (RETURN_TYPE)

//void
//as we se later,the void is used for functions without a return, for example, as when a function just return a console.log()
//or when setting a state in react.
function voidFunction(something: string): void {
    console.log("voidFunction says: " + something);
}

//never
//this is used for functions that never return, for example, when a function throws an error.
function neverFunction(msg: string): never {
    throw new Error(msg);
    console.log("neverFunction says: " + msg); //this will never be executed
}
// the idea is that the execution never reaches the end of the function, so it never returns.

//remember that in TypeScript, we always can delacre a optional parameter
function optionalParameter(a: number, b: number, c?: number): number {
   let result:number = c ? (a + b + c) :  (a + b); //this is an adecuate (and safe) implementation for the optional parameter
   return result;
}

//in Javascript we can sum a number with a string,
//but in TypeScript some thigns happens

function suma2(a: number | string, b: string | number): number | string | void {
    if(typeof a === "number" && typeof b === "number") return a + b;
    if(typeof a === "string" && typeof b === "string") return a + b;
}
//or we can create a lot of ways to resolve this
function suma3(a: number | string, b: string | number): number {
if(typeof a === "string"){
    a = parseInt(a);
}
if(typeof b === "string"){
    b = parseInt(b);
}
return a + b;
}    
//in this case we always return a number.
// but keep whit the lessons, there's more to solve this.