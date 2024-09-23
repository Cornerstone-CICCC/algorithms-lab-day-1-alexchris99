// Exercise 2: Write a function named 'filterByCategory' that takes an array of 
//product objects and a category string, and returns a new array with products that belong to the given category.

function filterByCategory(products, category) {
  for(let i = 0; i < products.length; i++){
    if (category == products[i].category){
      return [products[i]]
    }
  }
}

console.log(filterByCategory([{ name: 'Apple', category: 'Fruit' }, { name: 'Carrot', category: 'Vegetable' }], 'Vegetable')) 
// [{ name: 'Apple', category: 'Fruit' }]
