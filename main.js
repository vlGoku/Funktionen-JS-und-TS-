"use strict";
//pure functions
function pureFunctions(a, b) {
    return a + b;
}
console.log(pureFunctions(1, 2));
//Argumente & Parameter
//Beispiel 1
//"a", "b" sind Parameter
function addNumbers(a, b) {
    return a + b;
}
//"3", "5" sind Argumente
let sum = addNumbers(3, 5);
console.log(sum);
//Beispiel 2
//"name" = Parameter
function greetMe(name) {
    console.log(`Hallo ${name}`);
}
//"Marko" = Argument
greetMe("Marko");
//FactoryFunction
function createPerson(name, age) {
    return {
        name: name,
        age: age,
    };
}
let person1 = createPerson("Marko", 23);
console.log(person1);
//Funktionen Höherer Ordnung
//Funktionen, die Funktionen als Argumente entgegennehmen
function mapArray(arr, mapper) {
    return arr.map(mapper);
}
//Verwendung der Funktion
const square = (x) => x * x;
const numbers = [1, 2, 3, 4];
const squaredNumbers = mapArray(numbers, square);
console.log(squaredNumbers);
//Funktionen, die Funktionen zurückgeben
function multiplier(factor) {
    return function (x) {
        return x * factor;
    };
}
//Verwendung der Funktion
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5));
console.log(triple(5));
//Arrow vs normal
//Normal
function add(a, b) {
    return a + b;
}
console.log(add(5, 6));
//Arrow
const add2 = (a, b) => a + b;
console.log(add2(4, 6));
//# sourceMappingURL=main.js.map