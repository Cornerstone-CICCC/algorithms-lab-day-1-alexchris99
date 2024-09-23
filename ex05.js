// Exercise 5: Write a function named 'groupByCategory' that takes an array of product objects and 
//returns an object where the keys are categories and the values are arrays of products in those categories.

function groupByCategory(products) {
  let obj ={}
  for(let i =0; i < products.length; i++){
    if(obj[products[i].category] === undefined){
      obj[products[i].category] = []
    }
    obj[products[i].category].push({
      name: products[i].name,
      category: products[i].category
    })
  }
  return obj
}
// { Fruit: [{ name: 'Apple', category: 'Fruit' }, { name: 'Banana', category: 'Fruit' }], Vegetable: [{ name: 'Carrot', category: 'Vegetable' }] }
console.log(groupByCategory([{ name: 'Apple', category: 'Fruit' }, { name: 'Carrot', category: 'Vegetable' }, { name: 'Banana', category: 'Fruit' }])) 