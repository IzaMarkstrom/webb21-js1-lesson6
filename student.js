 
const students = [
    { birthYear: 1980, marks: 80 },
    { birthYear: 1979, marks: 60 },
    { birthYear: 1990, marks: 70 },
    { birthYear: 2000, marks: 85 },
    { birthYear: 2010, marks: 62 },
    { birthYear: 1967, marks: 49 },
    { birthYear: 1949, marks: 30 },
    { birthYear: 1996, marks: 83 },
    { birthYear: 2001, marks: 19 },
]
 
class Student {
    constructor(birthYear, marks, firstname, lastname){
        this.birthYear = birthYear
        this.mark = marks
        this.firstname = firstname
        this.lastname = lastname
    }
    getAge() {
        return 2021-this.birthYear
    }
    getAgeAtYear(year) {
        return year - this.birthYear
    }
    changeBirthYear(newBirthYear) {  
        this.birthYear = newBirthYear  // Förändrar värdet för just den instansen på åldern
    }
    getFullName() {
        return `${this.firstname} ${this.lastname}`
    }
}
 
const student1 = new Student(2001,19, "Iza", "Markström")
console.log(student1.getFullName())
console.log(student1.getAge())
console.log(student1.getAgeAtYear(2050))
