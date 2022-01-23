const Employee = require('./Employee');
class Engineer extends Employee{
    constructor(name, ID, email, engGithub){
        super(name, ID, email);
        this.engGithub = engGithub;
    }
    getGithub(){
        return engGithub;
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;