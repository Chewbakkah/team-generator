const Employee = require('./Employee');
class Manager extends Employee{
    constructor(name, id, email, mgrOffice){
        super(name, id, email);
        this.mgrOffice = mgrOffice;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;