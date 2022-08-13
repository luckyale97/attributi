const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let key = Object.keys(person);

// Print values of person using Object.keys
for (let i = 0; i < key.length; i++) {
  console.log(`${key[i]}:${person[key[i]]}`);
}