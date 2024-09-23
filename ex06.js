// Exercise 6: Write a function named 'uniqueValues' that takes an array of values and 
//returns a new array with only unique values, removing duplicates.

function uniqueValues(arr) {
  let arr_n = [];
  for(let i = 0; i < arr.length; i++){
    if(arr_n.includes(arr[i])){

    }
    else{
      arr_n.push((arr[i]))
    }
  }
  return arr_n
}

console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])) // [1, 2, 3, 4, 5]