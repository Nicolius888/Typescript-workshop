//tipado inferido
let mati = {
    nombre: 'Matias',
    edad: 29
}

//tipado explicito?

interface Persona {
    nombre: string;
    edad: number
}
// Franco ahora es nuestra variable tipo Persona, y debe contener nombre(string), edad(number) asi como la interfaz Persona lo exige
let franco: Persona = {
    nombre: "Franco",
    edad: 27
}

interface Estudiante extends Persona {
    esActivo: boolean
}
    
    
    let diego: Estudiante = {
        nombre: "Diego",
    edad: 29,
    esActivo: false //que pasa si comento alguno?
    //si comentamos esActivo, diego da error, ya que es Estudiante y requiere el booleano,
    //es decir o nos falta ese, o si no queremos utilizarlo , diego podria ser solo Persona,que no requiere el booleano,
    // en ves de Estudiante que si lo requiere.
}

// Investiga la palabra reservada implements
//segun entendi implements es para usar una interfaz desde una clase, 
//entonces una clase puede construir a partir de lo que contenga una interfaz(tambien pueden ser metdos)
//como si en vez de utilizarla como un type para crear una variable
//la usamos como "plantilla" para nuestro class constructor.
//despues cuando creamos objetos para nuestra clase heradan sus propiedades y metodos de la interfaz.
//ver video de classes para terminar de entender esto.
//----------------------------------------------------------------------------------------------------------------------
//aca creamos una interfaz que requiere un nombre:string y devuelve una string
interface Greeting {
    saludo:(persona: string) => void //investigar estas sintaxis
    //despedida:() => string
}

//aca la implementamos en distintas clases
 class Morning implements Greeting {
    saludo(persona: string) {
        console.log(`Buenos dias ${persona}`)
    }
}
 class Night implements Greeting {
    saludo(persona: string) {
        console.log(`Buenas noches ${persona}`)
    }
}

//y aca finalmente lo usamos, podemos crear variables basadas en clases,
//heredando estas variables los metodos de la clase
let Lunes = new Morning()
Lunes.saludo('Matias')

let Sabado = new Night()
Sabado.saludo('Matias')

//Tambien se permite implementar varias interfaces en una clase:
//class ClassName implements IInterfaceName1, IInterfaceName2 {
//}

//----------------------------------------------------------------------------------------------------------------------



// Existe otra alternativa para realizar lo mismo?
// Si, types.


type Person = {
    name: string,
    age: number
}

type Student = Person & {
    isActive: boolean;
}

let Fede: Student = {
    name: 'Fede',
    age: 29,
    isActive: false
}

//Investiga sus diferencias

export {}