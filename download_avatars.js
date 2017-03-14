var request = require('request');
// var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
  var GITHUB_USER = "imnunu";
  var GITHUB_TOKEN = "5d3b0a24f22cd651932d987240e5bf1a4bbd28c7";

  var requestURL = { url:('https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors') , headers: {'User-Agent': 'GitHub Avatar Downloader - Student Project'}};
  // console.log(requestURL);

  request(requestURL, function (error, response, body) {

    if (!error && response.statusCode == 200) {

      var parsed = JSON.parse(body);
      cb(error, parsed);
        // console.log(body);

        // let data = JSON.parse(body).data;

        // if (data && data.length) {
        // data.forEach(cb);
        // } else {
        // console.log(`Nothing found.`);
        //   }
    }
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }
  });
}


getRepoContributors("nodejs", "node", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});


