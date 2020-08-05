const readline = require('readline')
//
// readline.emitKeypressEvents(process.stdin)
//
// process.stdin.setRawMode(true)
//
//
// process.stdin.on('keypress', (str, key) => {
//     console.log(key)
// })
//

// const ttys = require('ttys')
//
// const stdin = ttys.stdin
// const stdout = ttys.stdout
//
// stdout.write('Hello world\n')
// stdout.write('\033[1A')
// stdout.write('champ')
// stdout.write('\033[K')
// console.log()

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
async function ask(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, answer => {
            resolve(answer)
        })
    })
}

(async () => {
    const name = await ask('Your project name?')
    console.log(name)
    process.exit()
})()
