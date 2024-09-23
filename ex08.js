// Exercise 8: Write a function named 'longestWord' that takes a string of text 
//and returns the longest word in the string.

function longestWord(text) {
  let newTextArr = text.split(" ")
  let word = ""
  for(let i =0; i < newTextArr.length; i++){
    if(word.length <= newTextArr[i].length){
      word = newTextArr[i]
    }
  }
  return word
}

console.log(longestWord('The quick brown fox jumps over the lazy dog')) // 'jumps'