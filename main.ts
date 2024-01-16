//pure functions

function pureFunctions(a: number, b: number) {
  return a + b;
}

console.log(pureFunctions(1, 2));

//Argumente & Parameter
//Beispiel 1
//"a", "b" sind Parameter

function addNumbers(a: number, b: number): number {
  return a + b;
}

//"3", "5" sind Argumente
let sum: number = addNumbers(3, 5);

console.log(sum);

//Beispiel 2
//"name" = Parameter

function greetMe(name: string) {
  console.log(`Hallo ${name}`);
}

//"Marko" = Argument
greetMe("Marko");

//FactoryFunction
function createPerson(
  name: string,
  age: number
): { name: string; age: number } {
  return {
    name: name,
    age: age,
  };
}

let person1 = createPerson("Marko", 23);
console.log(person1);

//Funktionen Höherer Ordnung
//Funktionen, die Funktionen als Argumente entgegennehmen
function mapArray(arr: number[], mapper: (x: number) => number): number[] {
  return arr.map(mapper);
}

//Verwendung der Funktion
const square = (x: number) => x * x;
const numbers = [1, 2, 3, 4];
const squaredNumbers = mapArray(numbers, square);

console.log(squaredNumbers);

//Funktionen, die Funktionen zurückgeben
function multiplier(factor: number): (x: number) => number {
  return function (x: number): number {
    return x * factor;
  };
}

//Verwendung der Funktion
const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));
console.log(triple(5));

//Funktion allgemein
function genericFunction<T>(input: T): T {
  return input;
}

let resultString: string = genericFunction("Hallo Welt");
let resultNumber: number = genericFunction(22);
let resultArray: number[] = genericFunction([1, 2, 3]);

//Destructuring
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

function printPerson({ firstName, lastName, age }: Person): void {
  console.log(`Name: ${firstName} ${lastName}, Alter: ${age}`);
}

const person: Person = {
  firstName: "Sara",
  lastName: "Huber",
  age: 23,
};

printPerson(person);

//Arrow vs normal

//Normal
function add(a: number, b: number) {
  return a + b;
}

console.log(add(5, 6));

//Arrow
const add2 = (a: number, b: number) => a + b;
console.log(add2(4, 6));
