
// #1
class methInterface {
    constructor(fly, swimming, walking, talking) {
        this.fly = fly
        this.swimming = swimming
        this.walking = walking
        this.talkung = talking
    }

    getFlying() {
        let sayFly = this.fly = 'Я могу летать'
        console.log(`${sayFly}`)
    }

    getSwimming() {
        let saySwim = this.swimming = 'Я могу плавать'
        console.log(`${saySwim}`)
    }

    getWalking() {
        let sayWalk = this.walking = 'Я могу ходить'
        console.log(`${sayWalk}`)
    }

    getTalking() {
        let sayTalk = this.talkung = 'Я могу говорить'
        console.log(`${sayTalk}`)
    }

}

const inst = new methInterface()

inst.getFlying()


// #2

class Pet {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getStartedAnimal() {
        let setName = this.name = 'Богдан'
        let setAge = this.age = '21'
        console.log(`Имя ${setName}, Возраст ${setAge}`)
    }

    setStartedAnimal(name, age) {
        console.log(`Имя ${name}, Возраст: ${age}`)
    }
}

const newPet = new Pet()
newPet.setStartedAnimal('Василь', '31')
newPet.getStartedAnimal()


// #4
class Fish {
    sayHello(name) {
        console.log(`Привет, меня зовут ${name}`)
    }
}

class Cat {
    sayHello(name) {
        console.log(`Привет, меня зовут ${name}`)
    }
}

class Duck {
    sayHello(name) {
        console.log(`Привет, меня зовут ${name}`)
    }
}

class Turtle {
    sayHello(name) {
        console.log(`Привет, меня зовут ${name}`)
    }
}

class Eagle {
    sayHello(name) {
        console.log(`Привет, меня зовут ${name}`)
    }
}

// #5

class PetOwner {
    constructor(listAnimal) {
        this.listAnimal = ['Dog', 'Cat']
    }

    getAllList() {
        const parse = this.listAnimal.map(i => i)
        console.log(parse)
    }

    addNewAnimal(name) {
        this.listAnimal.push(name)
        console.log('Create new animal:', + name)
        console.log(this.getAllList())
    }

}

const petOwner = new PetOwner()
petOwner.getAllList()
petOwner.addNewAnimal('Порося')
