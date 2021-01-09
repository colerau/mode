function findMode(array) {
  // create object where the keys are each unique number in the array and the values are the amount of times the number appears in the array

  let object = {}
  for (let i = 0; i < array.length; i++) {
    
  }
}

// mode is visibly 11
let array = [-2, 9, 9, 9, -2, -2, -2, -2, -2, -1, 0, 3, 1, 1, 1, 9, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]

let result = findMode(array)

// console.log(result)

let userInput = document.getElementById("user-array").value 

let form = document.getElementById("form")

form.addEventListener("submit", e => {
  e.preventDefault()
  let userInput = document.getElementById("user-array").value.trim()
  let array = []
  debugger
  for (let i = 0; i < userInput.length; i++) {
    array.push(userInput[i])
  }
  console.log(array)
})