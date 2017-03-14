const request = require('request');
const fs = require('fs');
const GITHUB_USER = "imnunu";
const GITHUB_TOKEN = "5d3b0a24f22cd651932d987240e5bf1a4bbd28c7";



console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {

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
//==========================================================

getRepoContributors("jquery", "jquery", function(result) {

  result.forEach(function(avatar){
    // console.log(avatar.avatar_url);
    downloadImageByURL(avatar.avatar_url, avatar.login)
  });


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
});

  // getRepoContributors("jquery", "jquery", function(err, result) {
  //   console.log("Errors:", err);
  //   console.log("Result:", result);
  // });
