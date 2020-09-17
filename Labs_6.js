
// #1

class GetNameDataWord {
    constructor(args = '') {
        this.args = args
    }

    getArgs(args) {
        let arg = this.args = args
        const data = new Date().getDate()
        const words = ['Hallo, wie gehts','Mir gehts gut', 'Freut mich', 'Vielen Dank.']
        let refreshWords = words.sort(() => 0.5 - Math.random())
        console.log(`Name author: ${arg}, Data: ${data}, Words: ${refreshWords}`)
    }
}

const getNameDataWord = new GetNameDataWord()
getNameDataWord.getArgs('Bogdan')


// #2

class setIntToString {
    constructor(int = 0.5) {
        this.int = int
    }

    getIntToStringMeth() {
        let toString = this.int.toString()
        console.log('Int to String:', toString)
    }

    getRandomWords(num) {
        const words = ['Hallo, wie gehts','Mir gehts gut', 'Freut mich', 'Vielen Dank.']
        let random = words.sort(() => num - Math.random())
        console.log('От случайного n', random)
    }
}

const setIntToStr = new setIntToString()
setIntToStr.getRandomWords(0.5)

// #3

class putStringToString {
    constructor(str = 'Words') {
        this.str = str
    }

    getReversMeth() {
        let words = this.str
        const rever = words
            .split('')
            .reverse()
            .join('')
            .trim()
        console.log('Reverse: ', rever)
    }
}

const putStr = new putStringToString()
putStr.getReversMeth()

class Replicator {

    getNameDataWords() {
        const cl = new GetNameDataWord()
        const res = cl.getArgs('New cl')
        console.log('GetNameDataWord: ', res)
    }

}

const rep = new Replicator()
rep.getNameDataWords()
