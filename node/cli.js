const VERSION = '0.0.1'
let optionFlag = false
let doubleCommandFlag = false
let tripleCommandFlag = false
let command = undefined
let value = undefined

// console.log(process.argv)
for (let i = 0; i < process.argv.length; i++) {
  if (process.argv[i] === '--version') {
    optionFlag = true
  } else {
    command = process.argv[2]
    value = process.argv[3]
    switch (command) {
      case 'double':
        doubleCommandFlag = true
      case 'triple':
        tripleCommandFlag = true
    }
  }
}

if (optionFlag) {
  console.log(`v${VERSION}`)
} else if (doubleCommandFlag) {
  console.log(double(value))
} else if (tripleCommandFlag) {
  console.log(triple(value))
} else {
  console.log(`${command} command is missing`)
}

function double(value) {
  return value * 2
}

function triple(value) {
  return value * 3
}
