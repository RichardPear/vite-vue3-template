const dotenv = require('dotenv')

const result = dotenv.config({ path: '.env' })

if (result.error) {
  throw result.error
}

console.log(result, result.parsed)
const x = 1
console.log(x)
