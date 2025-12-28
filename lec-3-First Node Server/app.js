const http = require('http');

// function requestListener(req, res) {
//     console.log(req);
// }

const server = http.createServer((req, res) => {
    console.log(req);
    // process.exit();
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server runninng on the address http://localhost:${port}`);
});