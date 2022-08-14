function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  fullName = () => `${this.firstName} ${this.lastName}`
}

const john = new Person("John", "Doe");
const simon = new Person("Simon", "Collins");



console.log(this.fullName()); // John Doe
console.log(this.fullName()); // Simon Collins

