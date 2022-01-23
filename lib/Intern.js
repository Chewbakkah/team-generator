const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, ID, email, intSchool){
        super(name, ID, email);
        this.intSchool = intSchool;
    }
    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;