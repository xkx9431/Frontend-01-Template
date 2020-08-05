const tty = require('tty')
const ttys = require('ttys')
const rl = require('readline')

const stdin = process.stdin
const stdout = process.stdout

stdin.setRawMode(true)
stdin.resume()
stdin.setEncoding('utf-8')

stdin.on('data', (key) => {
    const codes = key.split('').map(c => c.charCodeAt(0))
    console.log(codes)
    if (codes.length === 1) {
        console.log(key)
    } else if (codes.length === 3) {
        if (codes[0] === 27 && codes[1] === 91 && codes[2] === 68) {
            console.log('left')
        } else if (codes[0] === 27 && codes[1] === 91 && codes[2] === 66) {
            console.log('bottom')
        } else if (codes[0] === 27 && codes[1] === 91 && codes[2] === 67) {
            console.log('right')
        } else if (codes[0] === 27 && codes[1] === 91 && codes[2] === 65) {
            console.log('top')
        }
    }

    if (key === '\u0003') {
        process.exit(0)
    }
})

function key(k) {
    let result = null
    const codes = k.split('').map(c => c.charCodeAt(0))
    console.log(codes)
    if (codes.length === 1) {
        if (k === '\u0003') {
            result = {
                name: 'exit'
            }
        }
    } else if (codes.length === 3) {
        if (codes[0] === 27 && codes[1] === 91 && codes[2] === 68) {
            console.log('left')
        } else if (codes[0] === 27 && codes[1] === 91 && codes[2] === 66) {
            console.log('bottom')
        } else if (codes[0] === 27 && codes[1] === 91 && codes[2] === 67) {
            console.log('right')
        } else if (codes[0] === 27 && codes[1] === 91 && codes[2] === 65) {
            console.log('top')
        }
    }
}

// function getChar() {
//     return new Promise((resolve, reject) => {
//         stdin.once('data', (key) => {
//             resolve(key)
//         })
//     })
// }
//
// function up(n = 1) {
//     stdout.write('\033[' + n + 'A')
// }
//
// function down(n = 1) {
//     stdout.write('\033[' + n + 'B')
// }
//
// function left(n = 1) {
//     stdout.write('\033[' + n + 'D')
// }
//
// function right(n = 1) {
//     stdout.write('\033[' + n + 'C')
// }
//
// async function select(choices) {
//     let selected = 0
//     for (let i = 0; i < choices.length; i++) {
//         let choice = choices[i]
//         if (i === selected) {
//             stdout.write('[x] ' + choice + '\n')
//         } else {
//             stdout.write('[ ] ' + choice + '\n')
//         }
//     }
//     up(choices.length)
//     right()
//
//     while (true) {
//         const char = await getChar()
//         if (char === '\u0003') {
//             break
//         }
//
//         if (char === 'w' && selected > 0) {
//             selected--
//             up()
//         }
//         if (char === 's' && selected < choices.length-1) {
//             selected++
//             down()
//         }
//         // console.log(char.split('').map(c => c.charCodeAt(0)))
//     }
// }
//
// (async () => {
//     await select(['vue', 'react', 'angular'])
//
//     process.exit()
// })()
