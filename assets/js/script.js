const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

let feedback = {
    avatar: '',
    name: '',
    location: '',
    profile: '',
    blog: '',
    bio: '',
    repos: '',
    followers: '',
    following: '',
    stars: '',
    // bgColor: '',


};

///Activites 23 and 24 from section 9 for learning how to dynamically generate the HTML onto the website


inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;

axios.get(queryUrl).then(function(response){
  const repoNames = response.data.avatar_url;


  feedback.avatar=response.data.avatar_url;
  feedback.name=response.data.login;
  feedback.location=response.data.location;
  feedback.profile=response.data.html_url;
  feedback.blog=response.data.blog;
  feedback.bio=response.data.bio;
  feedback.repos=response.data.public_repos;
  feedback.followers=response.data.followers;
  feedback.following=response.data.following;
  feedback.stars=response.data.starred_url;
//   feedback.bgColor='blue';
  console.log(feedback);

//look up documentation on inquirer and figure out how to make multiple prompts


//   const repoNamesStr = repoNames.join("\n");

//   fs.writeFile("repos.txt", repoNamesStr, function(err){
//     if (err) {

//       throw err;
//     }
    
//   })

//   console.log(repoNames+"\n"+response.data.public_repos);
});


  });


//axios module




