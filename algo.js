function findMode(array) {
  // create object where the keys are each unique number in the array and the values are the amount of times each unique number appears in the array

  let object = {}
  for (let i = 0; i < array.length; i++) {
    if (object[array[i]]) {
      // increment existing key's value
      object[array[i]] += 1
    } else {
      // make a new key and set value to 1
      object[array[i]] = 1
    }
  }

  let biggestValue = -1
  let biggestValuesKey = -1

  // finding the biggest value and its corresponding key
  Object.keys(object).forEach(key => {
    let value = object[key]
    if (value > biggestValue) {
      biggestValue = value
      biggestValuesKey = key
    }
  })
  return biggestValuesKey
}

// mode is visibly 11
let array = [-2, 9, 9, 9, -2, -2, -2, -2, -2, -1, 0, 3, 1, 1, 1, 9, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]

let result = findMode(array)

// console.log(result)

let userInput = document.getElementById("user-array").value 

let form = document.getElementById("form")

let modeText = document.getElementById("result")

form.addEventListener("submit", e => {
  e.preventDefault()
  let userInput = document.getElementById("user-array").value.trim()
  let array = []
  for (let i = 0; i < userInput.length; i++) {
    array.push(userInput[i])
  }
  let mode = findMode(array)
  modeText.innerText = `The mode is: ${mode}`
})