const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

let person2 = person1
person2.firstName = 'Simon';

/* Sostituendo la costante con una variabile che identifica che person2 è uguale a person1, modifciando il valore di una automaticamente modifica anche l'altra */




// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);