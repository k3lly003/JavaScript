/*
OOP is a programming style that is based on the concept of object.
which can contain data in form of properties ad code in the form methods
OOP is popular programming style bcz it allows fpr modular, reusable code 
that can easier to read, maintain and update.
*/
/*
They're two types of OOP languages:
Class based languages like JAVA, C++
Prototype-based languages like JS
*/
/*
they are 4 rules or main pillars of OOP language, this define how data and actions
associated with the data are organized using code.
*/
//-inheritance: allows classes to inherit common properties from the parent class.
/*Parent*/
function Animal(name, age) {
  this.name = name;
  this.age = age;
}
Animal.prototype.eat = function () {
  console.log(`${this.name} ' is eating`);
};
/*child*/
function Dog(name, age, breed) {
  const dog = Animal(name, age);
  dog.breed = breed;
  dog.bark = function () {
    console.log(`${this.name} is barking.`);
  };
  return dog;
}
//usage
const myDog = new Dog("Buddy", 5, "Labrador");
myDog.eat(); // output: "Buddy is eating"
myDog.bark(); // output: "Buddy is barking."
//-polymorphism: is the ability to exist in many forms.
//-encapsulation: means it binds data and code together into one unit.
//-abstraction: dispalying only the important information by hiding the implementation part.
