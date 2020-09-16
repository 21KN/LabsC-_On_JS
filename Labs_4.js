
// #1

class Stack {
    constructor(data = []) {
        this.data = []
    }

    pushData(data) {
        this.data.push(data)
        console.log('Data:' ,this.data)
    }

    popData() {
        this.data.pop()
        console.log('Data:' ,this.data)
    }

    sizeData() {
        let size = this.data.length
        console.log('Size data,', size)
    }

    booleanData() {
        if (this.data === []) return throw Error
    }

    clearData() {
        this.data.push([])
    }
}


// #2
class ArrayStack extends Stack {
    constructor() {
        super();
    }

    getData() {
        console.log('All Data',this.data)
    }
}

// #3
class ArrayStackArray extends Stack {
    constructor() {
        super();
    }

    getList() {
        let list = this.data.map(i => i)
        console.log(list)
    }

}
