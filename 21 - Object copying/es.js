let ingredients_list = ["noodles",{"list":["ciao","arrivederci","buongiorno"]}];
let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));

ingredients_list_deepcopy[1].list = ["bye bye bye flour","bye bye"]
console.log(ingredients_list[1].list);
console.log(ingredients_list_deepcopy[1].list);