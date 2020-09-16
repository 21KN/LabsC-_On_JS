class Glader {
    travelTime() {
        return this.nameDevice
    }
}

class Desktop extends Glader {
    constructor() {
        super()
        this.nameDevice = 'Desktop'
    }
}

class Laptop extends Glader {
    constructor() {
        super()
        this.nameDevice = 'Laptop'
    }
}

class Phone extends Glader {
    constructor() {
        super()
        this.nameDevice = 'Phone'
    }
}

class Tablet extends Glader {
    constructor() {
        super()
        this.nameDevice = 'Tablet'
    }
}

class GetDevice {
    getName(name) {
        return name.travelTime()
    }
}

const commute = new GetDevice()

console.log(commute.getName(new Laptop()))
console.log(commute.getName(new Phone()))
console.log(commute.getName(new Desktop()))
console.log(commute.getName(new Tablet()))
