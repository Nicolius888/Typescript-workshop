"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Typescript va a inferir nuestra variable en la primer asignacion
var variableInferida = 2;
//O podemos definir explicitamente el tipado en el momento de su declaracion
var variableExplicita = 2;
//si hacemos hover sobre resultado, vemos que visual studio code infiere que "resultado"
//es un number, porque la suma de dos numeros es SIEMPRE un numero.
var resultado = variableExplicita + variableInferida;
//completar el tipado correspondiente para cada variable
var unString = 'mati';
var unNumber = 2;
var unBoolean = true;
var unNull = null; //que pasa aca?
var unUndefined = undefined; //y aca?
console.log(unString, unNumber, unBoolean, unNull, unUndefined);
// Enum
var Fases;
(function (Fases) {
    Fases[Fases["Primera"] = 0] = "Primera";
    Fases[Fases["Segunda"] = 1] = "Segunda";
    Fases[Fases["Tercera"] = 2] = "Tercera"; //2
})(Fases || (Fases = {}));
var phase = Fases.Primera; // 0
console.log(phase);
var userActions;
(function (userActions) {
    userActions["fetchUser"] = "FETCH_USER";
    userActions["postUser"] = "POST_USER"; // "POST_USER"
})(userActions || (userActions = {}));
var action = userActions.postUser;
console.log(action);
