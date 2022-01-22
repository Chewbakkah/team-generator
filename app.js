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
        type: 'confirm',
        name: 'engRank',
        message: "Is this employee an Engineer?",
        default: true,
        },
      {
        type: 'input',
        name: 'engName',
        message: "What is this engineer's name?",
        when: ({ engRank }) => engRank,
        validate: engNameInput => {
          if (engNameInput) {
            return true;
          } else {
            console.log("What is this engineer's name?");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'engID',
        message: "What is this engineer's employee ID?",
        when: ({ engRank }) => engRank,
        validate: engIDInput => {
          if (engIDInput) {
            return true;
          } else {
            console.log("What is this engineer's employee ID?");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'engEmail',
        message: "What is this engineer's email?",
        when: ({ engRank }) => engRank,
        validate: engEmailInput => {
          if (engEmailInput) {
            return true;
          } else {
            console.log("What is this engineer's email?");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'engGithub',
        message: "What is this engineer's GitHub username?",
        when: ({ engRank }) => engRank,
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
        type: 'confirm',
        name: 'intRank',
        message: "Is this employee an Intern?",
        when: (engRank) => engRank == false,
        default: true,
        },
      {
        type: 'input',
        name: 'intName',
        message: "What is this intern's name?",
        when: ({ intRank }) => intRank,
        validate: intNameInput => {
          if (intNameInput) {
            return true;
          } else {
            console.log("What is this intern's name?");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'intID',
        message: "What is this intern's employee ID?",
        when: ({ intRank }) => intRank,
        validate: intIDInput => {
          if (intIDInput) {
            return true;
          } else {
            console.log("What is this intern's employee ID?");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'intEmail',
        message: "What is this intern's email?",
        when: ({ intRank }) => intRank,
        validate: intEmailInput => {
          if (intEmailInput) {
            return true;
          } else {
            console.log("What is this intern's email?");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'intSchool',
        message: "What school does this intern attend?",
        when: ({ intRank }) => intRank,
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