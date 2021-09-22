// JS 1 lesson 6 med Hassan Mian
 
class Animal {
    constructor(name, legs) {
        this.name = name  // `This` är klassens egna scope
        this.legs = legs
    }
 
    // Metod (Metoder är funktioner som tillhör en klass)
    speech() {
        return `${this.name} makes a noice`
    }
 
    // Metod
    numberOgLegs() {
        return `This animal has ${this.legs} legs`
    }
}
 
const dog =  new Animal("dog", 4)
 
console.log(dog.speech())
