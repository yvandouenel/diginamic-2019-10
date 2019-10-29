const fruits = ['Apple', 'Banana'];
fruits.forEach(function(item, index, array) {
  console.log(item, index); // Apple 0 puis // Banana 1
});
fruits.push('Orange');
fruits.forEach(function(item, index, array) {
  console.log(item, index); // Apple 0 puis // Banana 1
});
let pos = fruits.indexOf('Banana');
console.log(pos);

let term_index = fruits.findIndex(function(element) {
  return element === "Orange";
});
console.log(term_index);
