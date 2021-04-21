const checkValidateLength = require("./checkValidateLength")
const checkValidateNumberCombination = require("./checkValidateNumberCombination")
const checkValidateOperateCombination = require("./checkValidateOperateCombination")
const checkValidateCalculation = require("./checkValidateCalculation")

function checkValidate(turnMove) {
  for (let i = 0; i < turnMove.length; i++) {
    const arr = turnMove[i].tile

    if (!checkValidateLength(arr)) return false

    if (!checkValidateNumberCombination(arr)) return false

    if (!checkValidateOperateCombination(arr)) return false
  }

}

module.exports = checkValidate