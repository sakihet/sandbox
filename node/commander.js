var program = require('commander')

program
  .version('0.0.2')
  // .option('-v --version', 'show version')
  .command('foo <string>')
  .action((string, cmd) => {
    console.log(`foo: ${string}`)
  })

program.parse(process.argv)

if (program.version) {
  console.log(program.version())
} else {
  console.log('hi')
}
