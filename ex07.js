// Exercise 7: Write a function named 'calculateAverage' that takes an array of 
//numbers and returns the average value.

function calculateAverage(arr) {
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    sum+=arr[i]
  }
  let avg = sum/(arr.length)+1
  return avg
}

console.log(calculateAverage([10, 20, 30, 40, 50])) // 30