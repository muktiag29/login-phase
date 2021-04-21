function checkValidateOperateCombination(arr) {
  const str = arr.join("")

  // plus validate
  if (str.includes("++")) return false
  if (str.includes("+*")) return false
  if (str.includes("+/")) return false
  if (str.includes("+=")) return false

  // minus validate
  if (str.includes("-+")) return false
  if (str.includes("--")) return false
  if (str.includes("-*")) return false
  if (str.includes("-/")) return false
  if (str.includes("-=")) return false

  // times validate 
  if (str.includes("*+")) return false
  if (str.includes("**")) return false
  if (str.includes("*/")) return false
  if (str.includes("*=")) return false

  // divide validate 
  if (str.includes("/+")) return false
  if (str.includes("/*")) return false
  if (str.includes("//")) return false
  if (str.includes("/=")) return false

  // equal validate 
  if (str.includes("=+")) return false
  if (str.includes("=*")) return false
  if (str.includes("=/")) return false
  if (str.includes("==")) return false

  return true
}

module.exports = checkValidateOperateCombination