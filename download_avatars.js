const request = require('request');
const fs = require('fs');
const GITHUB_USER = "imnunu";
const GITHUB_TOKEN = "5d3b0a24f22cd651932d987240e5bf1a4bbd28c7";

var repoOwner = process.argv[2];
var repoName = process.argv[3];

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {

  if (!repoOwner || !repoName) {
    console.log('You didn\'t input any valid name, Please try again');
      return false;
  }

  const options = {
    url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': 'Lighthouse Labs student project'
    }
  };

  request(options, function (error, response, body) {

    if(error) {
      throw error;
    } else if (response.statusCode == 200) {

        cb (JSON.parse(response.body));
      }
  });
}




  function downloadImageByURL(url, filePath) {

    request.get(url)
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Message: ', response.statusMessage);
       })
       .pipe(fs.createWriteStream("./avatars/" + filePath + ".jpg"))

  }
//==========================================================

getRepoContributors(repoOwner, repoName, function(result) {

  result.forEach(function(avatar){
    // console.log(avatar.avatar_url);
    downloadImageByURL(avatar.avatar_url, avatar.login)
  });

});

