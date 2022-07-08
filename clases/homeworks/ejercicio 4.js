"use strict";
exports.__esModule = true;
//tipado inferido
var mati = {
    nombre: 'Matias',
    edad: 29
};
// Franco ahora es nuestra variable tipo Persona, y debe contener nombre(string), edad(number) asi como la interfaz Persona lo exige
var franco = {
    nombre: "Franco",
    edad: 27
};
var diego = {
    nombre: "Diego",
    edad: 29,
    esActivo: false //que pasa si comento alguno?
    //si comentamos esActivo, diego da error, ya que es Estudiante y requiere el booleano,
    //es decir o nos falta ese, o si no queremos utilizarlo , diego podria ser solo Persona,que no requiere el booleano,
    // en ves de Estudiante que si lo requiere.
};
//aca la implementamos en distintas clases
var Morning = /** @class */ (function () {
    function Morning() {
    }
    Morning.prototype.saludo = function (persona) {
        console.log("Buenos dias ".concat(persona));
    };
    return Morning;
}());
var Night = /** @class */ (function () {
    function Night() {
    }
    Night.prototype.saludo = function (persona) {
        console.log("Buenas noches ".concat(persona));
    };
    return Night;
}());
//y aca finalmente lo usamos, podemos crear variables basadas en clases,
//heredando estas variables los metodos de la clase
var Lunes = new Morning();
Lunes.saludo('Matias');
var Sabado = new Night();
Sabado.saludo('Matias');
var Fede = {
    name: 'Fede',
    age: 29,
    isActive: false
};
