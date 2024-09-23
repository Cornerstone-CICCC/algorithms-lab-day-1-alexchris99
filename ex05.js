// Exercise 5: Write a function named 'groupByCategory' that takes an array of product objects and 
//returns an object where the keys are categories and the values are arrays of products in those categories.

function groupByCategory(products) {
  let obj ={}
  for(let i =0; i < products.length; i++){
    if(obj.keys != 1){
      obj[products[i].category]
    }else if(!products[i].category in obj.keys){
      obj[products[i].category]
    }
    obj[products[i].category]+=[(products[i].name +" "+products[i].category)]
  }
  console.log(obj)
}

console.log(groupByCategory([{ name: 'Apple', category: 'Fruit' }, { name: 'Carrot', category: 'Vegetable' }, { name: 'Banana', category: 'Fruit' }])) // { Fruit: [{ name: 'Apple', category: 'Fruit' }, { name: 'Banana', category: 'Fruit' }], Vegetable: [{ name: 'Carrot', category: 'Vegetable' }] }