const checkValidateCounter = require("./checkValidateCounter")

function checkValidateCalculate(arr) {
  const str = arr.join("")
  const arrEquation = str.split("=")
  const result = []

  for (let i = 0; i < arrEquation.length; i++) {
    result.push(checkValidateCounter(arrEquation[i]))
  }

  for (let i = 1; i < result.length; i++) {
    if (result[i - 1] !== result[i]) {
      return false
    }
  }

  return true
}

module.exports = checkValidateCalculate