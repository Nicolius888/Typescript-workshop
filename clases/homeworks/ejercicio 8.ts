//Intenta tipar una pluck function!
//TIP! Buscar la palabra reservada keyof y usar extends!
function pluck<Arr, Key extends keyof Arr>(arreglo: Arr[], prop: Key): Arr[Key][] { //Key tiene que ser una de las keys en Arr 
                                                                                    //(conceptualizando a lenguaje natutral seria algo como: 
                                                                                    //extends keyof == "se tiene que extender de las keys de")
    return arreglo.map((object) => object[prop]); 
}

const michis = [
    {name: "Zorro", age: 3},
    {name: "Luli", age:10},
];

console.log(pluck(michis, "name")); //despues del primer parametro
console.log(pluck(michis, "age"));//si abrimos comillas,TS nos ofrece las keys de "michis"
                                  //xq ya le aclaramos que la propiedad es una key (keyof) de nuestro arreglo.
                                  //(arreglo de objetos mas bien...)
//Output:
//[ 'Zorro', 'Luli' ]
//[ 3, 10 ]                                  

//-------------------------------------------------------

//otro ejemplo mucho mas complejo pero que muestra bien la funcionalidad de esto:
 interface EventoBase{
    user: string;
    time: number;
 }

interface MapaDeEventos {
    addToCart: EventoBase & {quantity: number, productID: string};
    checkout: EventoBase;
}

function outputEvento<Name extends keyof MapaDeEventos>(
    name:Name,
    data: MapaDeEventos[Name]
    ): void{
console.log([name, data])
}

outputEvento("addToCart",{productID:"111aaa",quantity:5,user:"Juan1990",time:22})
outputEvento("checkout", {user:"Juan1990", time: 23})
                 //aca segun el primer parametro, addToCart o checkout, los cuales ya nos ofrece TS
                //segun la interfaz que nos va a pedir que completemos en el segundo parametro
                //Basicamente, le estamos diciendo, esta funcion solo se puede implementar
                //en base a estos dos formatos ya prestablecidos. 
                //esto puede servir para evitar errores x ej. a la hora de trabajar entre muchas personas
                //o cuando se implementa en frontend una feature construida por backend

//Output:
//[ 'addToCart',{ productID: '111aaa', quantity: 5, user: 'Juan1990', time: 22 }]
//[ 'checkout', { user: 'Juan1990', time: 23 } ]                


