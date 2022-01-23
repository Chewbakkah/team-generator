const inquirer = require('inquirer');
const { writeFile, copyFile, appendFile } = require('./src/generate-site.js');
const { pageTop, mgrGen, engGen, intGen, pageBtm} = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const promptMgr = () => {
  console.log("Welcome To Team Builder Eleventeen");
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the team manager's name?",
      validate: mgrNameInput => {
        if (mgrNameInput) {
          return true;
        } else {
          console.log("Please enter the team manager's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'ID',
      message: "Enter manager's employee ID.",
      validate: mgrIDInput => {
        if (mgrIDInput) {
          return true;
        } else {
          console.log("Enter manager's employee ID!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter manager's email.",
      validate: mgrEmailInput => {
        if (mgrEmailInput) {
          return true;
        } else {
          console.log("Enter manager's email!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'mgrOffice',
      message: "Enter manager's office number.",
      validate: mgrOfficeInput => {
        if (mgrOfficeInput) {
          return true;
        } else {
          console.log("Enter manager's office number!");
          return false;
        }
      }
    }
  ])
  .then(mgrInfo => {
    // create manager object
    const { name, ID, email, mgrOffice } = mgrInfo;
    const manager = new Manager(name, ID, email, mgrOffice);
    //generates top of html content
    const top = pageTop(manager);
    writeFile(top);
    //create mgr html
    const mgrHTML = mgrGen(manager);
    //append mgr info to html
    appendFile(mgrHTML);
  })
};
const promptEmp = teamData => {
  console.log(`
=================
Add a New Employee
=================
`);
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'empRank',
        message: "Is this employee an engineer or intern?",
        choices: ["Engineer","Intern"]
        },
      {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("What is the employee's name?");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'ID',
        message: "What is the employee's ID?",
        validate: IDInput => {
          if (IDInput) {
            return true;
          } else {
            console.log("What is the employee's ID?");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the employee's email?",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log("What the employee's email?");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'engGithub',
        message: "What is this engineer's GitHub username?",
        when: ({ empRank }) => empRank === "Engineer",
        validate: engGithubInput => {
          if (engGithubInput) {
            return true;
          } else {
            console.log("What is this engineer's GitHub username?");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'intSchool',
        message: "What school does this intern attend?",
        when: ({ empRank }) => empRank === "Intern",
        validate: intSchoolInput => {
          if (intSchoolInput) {
            return true;
          } else {
            console.log("What school does this intern attend?");
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add another employee?',
        default: false
      }
    ])
    .then(empInfo => {
      let { empRank, name, ID, email, engGithub, intSchool } = empInfo;
      //check if emp = eng and apply eng object
      if(empRank === "Engineer"){
        let eng = new Engineer(name, ID, email, engGithub);
        let engHTML = engGen(eng);
        appendFile(engHTML);
      }
      //check if emp = int and apply int obj
      else if(empRank === "Intern"){
        let int = new Intern(name, ID, email, intSchool);
        let intHTML = intGen(int);
        appendFile(intHTML);
      }
    if(empInfo.confirmAddEmployee){
      promptEmp();
    }
    })
};

promptMgr()
  .then(promptEmp)
  .then(appendFile(pageBtm()))
  .then(copyFile());