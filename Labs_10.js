
// #1

const buttonForm = document.getElementById('button-submit')
const form = document.getElementsByTagName('form')
const input = document.getElementsByTagName("input")
console.log(form)

class cookingPizza {
    constructor(namePizza, sausage, meat, cheese, sauce) {
        this.namePizza = namePizza
        this.sausage = sausage
        this.meat = meat
        this.cheese = cheese
        this.sauce = sauce
    }

    getInfoForm(e) {
        e.preventDefault()

        const data = {
            pizzaName: this.namePizza,
            sausageName: this.sausage,
            meatName: this.meat,
            cheeaseName: this.cheese,
            sauceName: this.sauce,
        }

        console.log(data)
    }

    validateInput(e) {
        e.preventDefault()

        let value = e.target.value
        let inp = this.input.value

        console.log(value)
    }
}

const getPizza = new cookingPizza('Маргарита', 'Охотничьи', 'Порося', 'Пармезан','Кетчуп')
console.log(getPizza)

buttonForm.addEventListener('click', getPizza.getInfoForm)
