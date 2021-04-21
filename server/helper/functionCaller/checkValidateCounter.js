function plus(a, b) {
  return a + b
}

function minus(a, b) {
  return a - b
}

function times(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function checkValidateCounter(str) {
  let arr = []
  let temp = []
  let result = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" && (str[i - 1] === "*" || str[i - 1] === "/")) {
      temp.push(str[i])
    } else if(str[i] === "+" || str[i] === "-" || str[i] === "*" || str[i] === "/") {
      if(+temp.join("")[0] == 0 && temp.length !== 1) return false

      arr.push(+temp.join(""))
      arr.push(str[i])
      temp = []
    } else {
      temp.push(str[i])
    }
    
    if(i === str.length - 1) {
      if(+temp.join("")[0] == 0 && temp.length !== 1) return false

      arr.push(+temp.join(""))
    }
  }

  do {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "*") {
        result = times(arr[i - 1], arr[i + 1])
        arr.splice(i - 1, 3, result)
      }

      if (arr[i] === "/") {
        result = divide(arr[i - 1], arr[i + 1])
        arr.splice(i - 1, 3, result)
      }
    }
  } while (arr.find(element => element === "*") || arr.find(element => element === "/"))

  do {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "+") {
        result = plus(arr[i - 1], arr[i + 1])
        arr.splice(i - 1, 3, result)
      }

      if (arr[i] === "-") {
        result = minus(arr[i - 1], arr[i + 1])
        arr.splice(i - 1, 3, result)
      }
    }
  } while (arr.find(element => element === "+") || arr.find(element => element === "-"))

  return arr[0]
}

module.exports = checkValidateCounter