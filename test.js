//test.js

const f2c = require('./index.js')

const tempF = 20
const tempC = f2c(tempF)

if(tempC === -6.66) {
	console.log('Test OK!')
	process.exit(0)
}

console.log('Test failed!')
process.exit(1)