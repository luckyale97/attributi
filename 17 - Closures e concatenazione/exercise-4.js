function calculate() {
  let tot = 0;

  let operations = {
    add: function (num){
      tot += num;
      return this;
    },


    multiply: function (num){
      tot *= num;
      return this;
    },

    sub: function (num){
      tot -= num;
      return this;
    },

    divide: function (num) {
      tot /= num;
      return this;
    },
printResult: function () {
      return tot;
    }
  }
  return operations;
}

const calculator = calculate();
console.log(calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult()); // Il risultato sarà: 7