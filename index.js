var fs = require('fs');
var colors = require('colors');


function getDirInfo(dirpath='.', filepath='./', filename='dirInfo.txt'){
    console.log('Reading directory info...'.yellow);
    fs.readdir(dirpath, function (err, data) {
        if(err) throw err;
       fs.writeFile('' + filepath + filename, data, function(err){
           if(err) throw err;
           console.log('Written to: ' + filepath.cyan + filename.green);
       });
    });
}
getDirInfo();