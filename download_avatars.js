var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
  var GITHUB_USER = "imnunu";
  var GITHUB_TOKEN = "5d3b0a24f22cd651932d987240e5bf1a4bbd28c7";

  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);
//   request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
//        .on('error', function (err) {                                   // Note 2
//          throw err;
//        })
//        .on('response', function (response) {                           // Note 3
//          console.log('Response Status Message: ', response.statusMessage, 'content-type', response.headers['content-type'], '\nDownload complete.');
//        })
//        .pipe(fs.createWriteStream('./future.jpg'));               // Note 4

}




getRepoContributors("nodejs", "node", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});



// curl -u imnunu:5d3b0a24f22cd651932d987240e5bf1a4bbd28c7 -I https://api.github.com/users/lighthouse-labs