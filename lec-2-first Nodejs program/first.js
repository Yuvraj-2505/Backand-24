const fs = require('fs');
fs.writeFile('output.txt', 'Hello, World!', (err) => {
    if(err) console.log("Error Occured");
    else console.log("File written successfully");
});