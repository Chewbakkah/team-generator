const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./src/generate-site.js');
const generatePage = require('./src/page-template');

const promptMgr = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'mgrName',
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
      name: 'mgrID',
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
      name: 'mgrEmail',
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
  ]);
};
const promptEmp = employeeData => {
  console.log(`
=================
Add a New Employee
=================
`);

  // If there's no 'projects' array property, create one
  if (!teamData.employee) {
    teamData.employee = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add another employee?',
        default: false
      }
    ])
    .then(employeeData => {
      teamData.employee.push(employeeData);
      if (employeeData.confirmAddEmployee) {
        return promptEmp(teamData);
      } else {
        return teamData;
      }
    });
};

promptMgr()
  .then(promptEmp)
  .then(teamData => {
    return generatePage(teamData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });