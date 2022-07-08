"use strict";
//Intenta tipar una pluck function!
//TIP! Buscar la palabra reservada keyof y usar extends!
function pluck(arreglo, prop) {
    return arreglo.map(function (object) {
        return object[prop];
    });
}
