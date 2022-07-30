function createStore(dress) {
return function(shoes){
  return `${dress}, ${shoes}`;
}

}

const redPants = { id: 1, name: 'Red Pants' };
const whiteHat = { id: 2, name: 'White Hat' };
const blackSneakers = { id: 3, name: 'Black Sneakers' };

console.log('--- Dress Store ---');
const dressStore = createStore();
dressStore(redPants);
dressStore(whiteHat);
console.log(redPants);
console.log(whiteHat);


console.log('--- Shoes Store ---');
const shoesStore = createStore();
shoesStore(blackSneakers);
console.log(blackSneakers);
