const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let value = Object.values(person);

for (let i = 0; i < value.length; i++) {

  console.log(value[i]);
}

// Print values of person using Object.values
