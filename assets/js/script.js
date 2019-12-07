const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

let feedback;

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/`;

axios.get(queryUrl+'repos').then(function(response){
    feedback = response;
  const repoNames = response.data.length;

//   const repoNamesStr = repoNames.join("\n");

//   fs.writeFile("repos.txt", repoNamesStr, function(err){
//     if (err) {

//       throw err;
//     }
    
//   })

  console.log(repoNames);
});


  });


//axios module




