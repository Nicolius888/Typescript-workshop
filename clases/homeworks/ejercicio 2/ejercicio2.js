"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Null
var nullExample = null; // Solo puede tomar valor "null"
var numberExample = null; // Pero el valor "null" podemos asignarlo 
// a cualquier variable
// Undefined
var undefinedExample = undefined; // Solo puede tomar valor "undefined"
var stringExample = undefined; // Pero el valor "undefined" podemos asignarlo 
// a cualquier variable
//proba cambiando las opciones del tsconfig.json
// "strictNullChecks": true
//Visual studio code siempre va a tomar el tsconfig de la carpeta donde tengas abierto
//tu proyecto, entonces, tal vez no veas los cambios
function noImplicitType(firstArg, secondArg) {
    console.log("First Argument: ", firstArg);
    console.log("Second Argument: ", secondArg);
}
noImplicitType(1, 2);
noImplicitType("Franco", "Etcheverri");
noImplicitType(true, null);
// Any
var ejemploAny = "Matias";
ejemploAny = 29;
ejemploAny = null;
// Unknown
var idk = "Matias";
idk = 29;
idk = null;
//en un principio parecen iguales
var anyValue = "Matias";
var unkValue = "Matias";
var str1 = anyValue; // Todo OK, puedo asignarlo
// let str2: string = unkValue; // Error: Type 'unknown' is not assignable to type 'string'.
var str3 = unkValue; // Explicit cast
//anyValue.metodo(); // Todo OK, compila. Falla en tiempo de ejecución si el método no existe
// unkValue.method(); // Error: no lo permite
var iDontKnow = "typescript";
//ejercicio
var nowIKnow = iDontKnow; //utiliza el casteo explicito para asignarle a nowIKnow un string;
console.log(nowIKnow);
