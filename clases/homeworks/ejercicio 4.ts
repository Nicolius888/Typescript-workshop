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
//aca creamos una interfaz que requiere un persona:string y devuelve una string
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

//Tambien se permite implementar o extender varias interfaces en una clase:(same syntax for bot)
//class ClassName implements IInterfaceName1, IInterfaceName2 {
//}
//https://www.koderhq.com/tutorial/typescript/interface/
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
//https://blog.logrocket.com/extending-object-like-types-interfaces-typescript/
//un buen articulo sobre interfaces y types a la hora de extender, pero no pareciera remarcar diferencias, mas bien concluye
//que es solo una decision de estilo y organizacion propia.
//SIN EMBARGO
//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
//documentacion de typescript explica que agregar campos a una interfaz es tan sencillo como re-declararlas de nuevo y 
//anotar los nuevos campos, y a los tipos en cambio no se los puede re-declarar
//ej.:(estan en el link, solo saque el getBear() xq nose que seria ese metodo, lo adapto aca a lo que se)
//----------------------------------------------------------------------------------------------------------------------
//Extending an interface
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear: Bear = {
    name: 'Bear',
    honey: true
}

//Adding new fields to an existing interface

interface Bee {
    name: string
  }
  
  interface Bee {
    isQueen: boolean
  }
  
  const someBee: Bee = {
    name: 'J Bee',
    isQueen: true
    }
//---------------------------------------------------------------------------------------------------------------------
 
//Hacer esto mismo en types da Duplicate Identifier Error   

type Dog = {
    name: string
}

// type Dog = {
//     itsFriendly: string
// }

//si puedo como ya se explico arriba, pero esto es extender, no agregar una propiedad, es decir generamos un nuevo tipo 
//que hereda lo del anterior
type FriendlyDog = Dog & {
    itsFriendly: string
}

const Firulais: FriendlyDog = {
    name: 'Firulais',
    itsFriendly: 'its friendly'
}


export {}