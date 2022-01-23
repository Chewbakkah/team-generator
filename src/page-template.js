function pageTop(manager){
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="style.css">
      <title>Knights of ${manager.name}</title>
  </head>
  <body class="bg-secondary bg-opacity-10">
      <!-- header with title -->
      <header class="bg-primary text-white">
          <h1>Riding Under The ${manager.name} Banner!</h1>
      </header>
  
      <!-- container holding the team members -->
      <main class="container">
          <div class="row">`;
}

function mgrGen(manager){
  return `
  <div class="col-md-4 col-sm-1">
      <div class="card border-info mb-3">
          <div class="card-header text-white bg-info bg-gradient">
              <h5 class="card-title">${manager.name}</h5>
              <h6 class="card-subtitle"><i class="fas fa-dragon"></i> Manager</h6>
          </div>
          <div class="card-body">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${manager.ID}</li>
                  <li class="list-group-item">Email: <a href="mailto: ${manager.email}">${manager.email}</a></li>
                  <li class="list-group-item">Office Number: ${manager.mgrOffice}</li>
              </ul>
          </div>
      </div>
  </div>
  `;
}

function engGen(eng) {
  return `
  <div class="col-md-4 col-sm-1">
      <div class="card border-info mb-3">
          <div class="card-header text-white bg-info bg-gradient">
              <h5 class="card-title">${eng.name}</h5>
              <h6 class="card-subtitle"><i class="fas fa-chess-knight"></i> Engineer</h6>
          </div>
          <div class="card-body">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${eng.ID}</li>
                  <li class="list-group-item">Email: <a href="mailto: ${eng.email}">${eng.email}</a></li>
                  <li class="list-group-item">GitHub: <a href="https://github.com/${eng.engGithub}" target="_blank">${engineer.gitHubId}</a></li>
              </ul>
          </div>
      </div>
  </div>
  `;
}

function ingGen(int){
  return `
  <div class="col-md-4 col-sm-1">
      <div class="card border-info mb-3">
          <div class="card-header text-white bg-info bg-gradient">
              <h5 class="card-title">${int.name}</h5>
              <h6 class="card-subtitle"><i class="fas fa-baby"></i> Intern</h6>
          </div>
          <div class="card-body">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${int.ID}</li>
                  <li class="list-group-item">Email: <a href="mailto: ${int.email}">${int.email}</a></li>
                  <li class="list-group-item">School: ${int.intSchool}</li>
              </ul>
          </div>
      </div>
  </div>
  `;
}

function pageBtm(){
  return `                  
          </div>
      </main>
  </body>
  </html>`;
}

module.exports = { pageTop, mgrGen, engGen, intGen, pageBtm};