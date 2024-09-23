// Exercise 4: Write a function named 'countOccurrences' that takes an array of strings and returns 
//an object with the count of each string in the array.

function countOccurrences(arr) {
  count = {};
  arr.forEach(ele =>{
    if(count[ele]){
      count[ele] += 1
    }else{
      count[ele] = 1
    }
  })
  return count
}

console.log(countOccurrences(['apple', 'banana', 'apple'])) // { apple: 2, banana: 1 }