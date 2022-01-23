const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

  const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
              console.log(err);
              return;
            }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

  //appends new employee info to body of html
  const appendFile = bodyContent => {
    return new Promise((resolve, reject) => {
      fs.appendFile('./dist/index.html', bodyContent, err=> {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'File updated.'
        });
      });
    });
  };

  module.exports = { writeFile, copyFile, appendFile };