class Person {
    protected name: string;   //So i guess this is where you declare the types of the variables
    private age: number;
    //private mail: string;
    constructor(newName: string, newAge: number) {   // and here where you pass it to the constructor, but why you give the types again?
      this.name = newName;                           //now i get it
      this.age = newAge;
    }
  }
  
  class Student extends Person {
    private regular: boolean;//declare
    
    constructor(name: string, age: number, regular: boolean) { //declare the arguments for the constructor (when = new Student(...))
      super(name, age);//call the inherit variables
      this.regular = regular; //asign the argument to the variable
    }
    
    getFullInfo() {
      return `${this.name} (${this.age} years old) - ${this.regular ? 'regular' : 'not regular'}`;//x ex.: if we change age to private,
                                                                                                  //we cannot use it here
    }
  }
  
  const student = new Student("Franco", 26, true);
  
  student.getFullInfo(); // "Franco (26 years old) - not regular"
  student.name; // Property 'name' is protected and only accessible within class 'Person' and its subclasses
  student.age; // Property 'age' is protected and only accessible within class 'Person' and its subclasses.
  student.regular; // Property 'regular' is private and only accessible within class 'Student'

//proba como cambiar los modificadores de atributos de la clase!
  export {}