function checkValidateNumberCombination(arr) {
  let check
  for (let i = 1; i < arr.length; i++) {
    check = arr[i - 1] + arr[i]

    if(+check > 100) {
      return false
    }
  }

  return true
}

module.exports = checkValidateNumberCombination