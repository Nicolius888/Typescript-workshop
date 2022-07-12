let some = 33;
let number = 33;
let alguna = "hello";
let palabra = "hola";

function conq (a: string, b: string): string;
function conq (a: string, b: number): string;
function conq (a: number, b: string): string;
function conq (a: number, b: number): number;
function conq (a: any, b: any): any {              //sin este overload no se puede hacer el llamado, nose exactamente por que.
    return a + b;                                  //obtenemos: This overload signature is not compatible with its implementation signature.
}                                                  //cuando si las probamos por separado, si se puede hacer el llamado.

let coso = conq(some, number);

//Since the return type can be either string or number as per the first two function declarations,
//we must use compatible parameters and return type as any in the function definition.


// Logra que esta funcion tambien concatene strings