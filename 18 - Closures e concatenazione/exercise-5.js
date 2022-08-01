function memoize(fn) {
  let cache = {};
  return (num) => {
    if (cache[num]){
      console.log('Fetching from cache for' + num);
      return cache[num];
    }
 

console.log('Calculating result for' + num);
const output = fn(num)
cache[num] = output;
return output;
 }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

let factory = memoize(factorial);
console.log(factory(10));
console.log(factory(6));
console.log(factory(5));
console.log(factory(10));
