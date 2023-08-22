const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = "";
    for (let i = 0, j = 10; i < expr.length; i = i + 10, j = j + 10) {
        let num = "";
        num = expr.slice(i, j);
        let code = "";
        if (num === "**********") {
            code = code + " ";
        } else {
            for (let x = 0, y = 2; x < 10; x = x + 2, y = y + 2) {
                if(num.slice(x, y) === "10") {
                    code = code + ".";
                }
                else if(num.slice(x, y) === "11") {
                    code = code + "-";
                }
            }  
        }
        if (code === " ") {
            result = result + " ";
        } else {
            result = result + MORSE_TABLE[code]
        }
    }
    return result
    }

module.exports = {
    decode
}