class Person {
  protected name: string;
  protected age: number;
  //private mail: string;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
  
class Student extends Person {
  private regular: boolean;
  
  constructor(name: string, age: number, regular: boolean) {
    super(name, age);
    this.regular = regular;
  }
  
  getFullInfo() {
    return `${this.name} (${this.age} years old) - ${this.regular ? 'regular' : 'not regular'}`;
  }
}
  
const student = new Student("Franco", 26, true);

student.getFullInfo(); // "Franco (26 years old) - not regular"
// student.name; // Property 'name' is protected and only accessible within class 'Person' and its subclasses
// student.age; // Property 'age' is protected and only accessible within class 'Person' and its subclasses.
// student.regular; // Property 'regular' is private and only accessible within class 'Student'

//proba como cambiar los modificadores de atributos de la clase!

//public: propiedades accesibles desde cualquier lado sin restricciones
//private: solo se puede acceder a las propiedades desde dentro de la misma clase
//protected: solo se puede acceder a las propiedades desde dentro de la misma clase o instancias de las clases hijo(que la extienden)

  export {}