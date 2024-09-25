// Exercise 10: Write a function named 'formatDate' that takes a date string (in the format 'YYYY-MM-DD')
// and returns a formatted date string (e.g., 'January 1, 2022').

function formatDate(dateStr) {
  let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  let date = dateStr.split("-")
  console.log(months[parseInt(date[1])-1])
  return months[parseInt(date[1])-1] +" " + date[2]+"," +" " + date[0]
}


console.log(formatDate('2022-01-01')) // 'January 1, 2022'