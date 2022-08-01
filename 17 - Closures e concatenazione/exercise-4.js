function calculate() {
return function(this){
  return `${this}`;
}

}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
console.log(calculator);